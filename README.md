# Welch's *t*-test calculator

Is there a statistically significant difference between two datasets? Move the slider and observe the impact of the significance level on the probability of making the wrong decision. Input and explore your datasets.

Great for hypothesis testing, calculating the positive predictive value, and plotting the receiver operating characteristic (ROC) curve.

<br />

## Installation

Clone the repository.

```bash
git clone https://github.com/sebastian-apps/ttest.git
```

Create the virtual environment.

```
cd ttest
```
```
python -m venv ttest_env
```

Activate the virtual environment for Windows.

```
ttest_env\Scripts\activate
```

Activate the virtual environment for Mac.

```
source ttest_env/bin/activate
```

Install dependencies. The installation works best with Python 3.7.7.

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

View the project at localhost:8000

