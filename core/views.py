from django.shortcuts import render
from django.http import HttpResponseRedirect, Http404, JsonResponse, HttpResponse
from django.urls import reverse
from .models import Datasets
from .forms import DatasetsForm
import scipy.stats as st
import json
import numpy as np
import math
import statistics



DEC = 4  # Round values to a constant number of decimal places.


def ttest(request):

    model_instance = None
    data1 = {}
    data2 = {}
    test_results = {}
    axes = {}

    if request.method != 'POST':
        # No data submitted; create a blank form.
        form = DatasetsForm()
        # Default datasets
        dataset1 = [87, 101, 64, 86, 87, 82, 70]
        dataset2 = [100, 124, 93, 114, 123, 130, 136, 120, 107, 69, 120]
        form.fields['dataset1'].initial = str(dataset1).replace(", ","\n").replace("[","").replace("]","")
        form.fields['dataset2'].initial = str(dataset2).replace(", ","\n").replace("[","").replace("]","")

    else:
        # POST data submitted; process data.
        form = DatasetsForm(data=request.POST)
        if form.is_valid():
            model_instance = form.save(commit=False)
            dataset1 = clean_dataset(model_instance.dataset1)
            dataset2 = clean_dataset(model_instance.dataset2)
            # Add here any changes before saving to database
            model_instance.save()

        else:
            context = {'form': form }
            return render(request, 'core/ttest.html', context)

    try:
        # Get descriptive statistics
        data1 = get_stats(dataset1)
        data2 = get_stats(dataset2)

        # Sample with largest mean should be group 2, since alternate hypothesis: population 1 < population 2
        if data1['mean'] > data2['mean']:
            data1, data2 = data2, data1

        # Get inferential statistics
        df = get_df(data1, data2) # degrees of freedom
        t_value, p_value = get_t_and_p_value(data1, data2, df)
        t_value_x = convert_t_to_x(t_value, data1)

        # Define chart's x-axis range.
        x_min, x_max = get_x_axis_min_max(data1, data2)
        # Get curve x,y values for plotting.
        curve1, step_size1 = get_t_curve(data1, x_min, x_max)
        curve2, step_size2 = get_t_curve(data2, x_min, x_max)

        # Configure the x-axis step size for a more visually appealing chart.
        if step_size1 > step_size2:
            step_size = step_size1
        else:
            step_size = step_size2

        if step_size >= 1:  # If step_size > 1, eliminate decimal places.
            step_size = int(step_size)
            x_min = int(x_min)
            x_max = int(x_max)

        # Define chart's y-axis range: 0 to y_max. Multiply by arbitrary value to provide headspace.
        y_max = 1.2 * get_y_axis_max(curve1, curve2)


        data1.update({'t_curve': json.dumps(curve1)})
        data2.update({'t_curve': json.dumps(curve2)})
        test_results.update({"effect_size" : get_effect_size(data1, data2)})
        test_results.update({"df" : df, "t_value" : t_value, "p_value" : p_value})
        test_results.update({"t_value_x" : t_value_x})
        test_results.update({"crit_t_init": st.norm.ppf(.95)})  # Arbitrary starting point (alpha=0.05), opposite is st.norm.cdf(1.64)
        axes.update({"x_min": x_min, "x_max": x_max, "y_max": y_max, "step_size": step_size})


    except Exception as e:
        print(str(e))


    context = { 'form': form, 'data1': data1, 'data2': data2,
                'test_results': test_results, 'axes': json.dumps(axes),
              }
    return render(request, 'core/ttest.html', context)





def get_stats(dataset):
    return {
        "dataset": dataset,
        "mean": round(statistics.mean(dataset),DEC),
        "sd": round(statistics.stdev(dataset),DEC),
        "n": len(dataset)
    }



def get_t_curve(data, min, max):
    """ Return x,y coordinates of t distribution. """
    df = data['n']-1
    step_size = (max - min) / 50   # 50 is an arbitrary number
    x_list = [round(min + step_size*i, 6) for i in range(0, 50)]
    try:
        coords = []
        for x in x_list:
            t = (x-data['mean'])/(data['sd'])
            y = round((math.gamma((df+1)/2)/(math.sqrt(df*math.pi)*math.gamma(df/2))) * (1+((t**2)/df))**(-(df+1)/2),DEC)
            coords.append({'x': x, 'y': y})
        return coords, round(step_size,DEC)

    except Exception as e:
        print(str(e))
        return [], round(step_size,DEC)




def convert_t_to_x(t, data):
    return round(data['mean'] + (abs(t) * data['sd']), DEC)




def get_df(data1, data2):
    """ Get degrees of freedom """
    v1 = data1['n'] - 1
    v2 = data2['n'] - 1
    df = (((data1['sd']**(2)/data1['n'])+(data2['sd']**(2)/data2['n']))**(2))/(((data1['sd']**(4)/(v1*data1['n']**(2))))+((data2['sd']**(4)/(v2*data2['n']**(2)))))
    return math.trunc(round(df,0))


def get_t_and_p_value(data1, data2, df):
    t = (data1['mean'] - data2['mean'])/math.sqrt((data1['sd']**(2)/data1['n'])+(data2['sd']**(2)/data2['n']))
    p_value = st.t.sf(np.abs(t), df)   # two-sided p_value = st.t.sf(np.abs(t), df) * 2
    return round(t,DEC), round(p_value,DEC)




def get_x_axis_min_max(data1, data2):
    vals = []
    vals.append(round(data1['mean'] - (6 * data1['sd']), 6))
    vals.append(round(data1['mean'] + (6 * data1['sd']), 6))
    vals.append(round(data2['mean'] - (6 * data1['sd']), 6))
    vals.append(round(data2['mean'] + (6 * data1['sd']), 6))
    return min(vals), max(vals)



def get_y_axis_max(dist_curve1, dist_curve2):
    l1 = [coord.get('y') for coord in dist_curve1]
    l2 = [coord.get('y') for coord in dist_curve2]
    return max(l1 + l2)



def clean_dataset(dataset):
    dataset = dataset.splitlines()
    try:
        dataset = [float(data) for data in dataset]
    except ValueError:
        return []
    return dataset



# Functions below are not currently used.

def get_normal_curve(data, min, max):
    """ Return x,y coordinates of normal distribution. Useful for z-tests. """
    print(data)
    try:
        coords = []
        for x in range(min, max + 1):
            y = round((1/(data['sd']*math.sqrt(2*math.pi)))*math.exp((-((x-data['mean']) ** 2))/(2*data['sd'] ** 2)),DEC)
            coords.append({'x': x, 'y': y})
        return coords
    except Exception as e:
        print(str(e))
        return []


def get_effect_size(data1, data2):
    mean_difference = data1['mean'] - data2['mean']
    num = ((data1['n'] - 1)*(data1['sd']**(2))) + ((data2['n'] - 1)*(data2['sd']**(2)))
    den = data1['n'] + data2['n'] - 2
    pooled_sd = math.sqrt(num/den)  # pooled sd
    return round(abs(mean_difference / pooled_sd),DEC)
