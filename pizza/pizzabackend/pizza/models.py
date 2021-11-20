from django.db import models
#from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Pizza(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.CharField(max_length=500)
    toppings = models.CharField(max_length=200)
    image = models.URLField()
    price = models.FloatField()

    class Meta:
        ordering = ['name']

    def __str__(self):
        if self is None:
            return f'None'
        else:
            return self.name
