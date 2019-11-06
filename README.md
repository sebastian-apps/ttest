# Welch's t-test calculator

<br />

## Installation

Clone the repository.

```bash
git clone https://github.com/sebastian-apps/ttest.git
```

Create and activate the virtual environment.

```
cd ttest
python -m venv ttest_env
source ttest_env/bin/activate
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

View django-project at 127.0.0.1:8000.

