from django import forms
from .models import Datasets

class DatasetsForm(forms.ModelForm):

    class Meta:
        model = Datasets
        fields = ['dataset1', 'dataset2']
        labels = {
            'dataset1': 'Group 1',
            'dataset2': 'Group 2',
        }
        widgets = {
          'dataset1': forms.Textarea(attrs={'rows':13, 'cols':1, 'style':'resize:none;'}),
          'dataset2': forms.Textarea(attrs={'rows':13, 'cols':1, 'style':'resize:none;'}),
        }




    # def __init__(self, *args, **kwargs):
    #     super(DatasetsForm, self).__init__(*args, **kwargs)
    #     #self.fields['datasets].widget.attrs.update(style='max-width: 8em')
