from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.TextField()
    latitude = models.TextField()
    longitude = models.TextField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'location'
