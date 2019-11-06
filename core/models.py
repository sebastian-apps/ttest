from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator, MaxLengthValidator
from django.core.exceptions import ValidationError
from django import forms


def validate_dataset(dataset):
    dataset = dataset.splitlines()
    try:
        dataset = [float(data) for data in dataset]
        if len(dataset) > 1:
            if len(dataset) <= 100:
                return dataset
            else:
                raise forms.ValidationError('Maximum 100 values.')
        else:
            raise forms.ValidationError('Not a valid dataset.')
    except ValueError:
        raise forms.ValidationError('Not a valid dataset.')



class Datasets(models.Model):

    dataset1 = models.TextField(validators=[validate_dataset], null=False, blank=False, default=None)
    # mean1 = models.FloatField(null=True, blank=False, default=None)
    # sd1 = models.FloatField(null=True, blank=False, default=None)
    # n1 = models.IntegerField(null=True, blank=False, default=None)

    dataset2 = models.TextField(validators=[validate_dataset], null=False, blank=False, default=None)
    # mean2 = models.FloatField(null=True, blank=False, default=None)
    # sd2 = models.FloatField(null=True, blank=False, default=None)
    # n2 = models.IntegerField(null=True, blank=False, default=None)

    date_added = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        """Return a string representation of the model."""
        return str(self.date_added)
