# Welch's *t*-test calculator

Is there a statistically significant difference between two datasets? Move the slider and observe the impact of the significance level on the probability of making the wrong decision. Input and explore your datasets.

Welch's t-test can also be used for evaluating binary classifiers, which are used in medical testing and machine learning. Binary classifiers distinguish between two states such as cancer is "detected" and "not detected", or the flight will be "delayed" and "not delayed".

<br />

## Installation

Clone the repository.

```bash
git clone https://github.com/sebastian-apps/ttest.git
```

Create the virtual environment.

```
cd ttest
python -m venv ttest_env
```

Activate the virtual environment <i>for OSX</i>.

```
source ttest_env/bin/activate
```

Activate the virtual environment <i>for Windows</i>.

```
ttest_env\Scripts\activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Create the database.

```bash
python manage.py migrate
```

Run the server.

```bash
python manage.py runserver
```

View django-project at localhost:8000 

