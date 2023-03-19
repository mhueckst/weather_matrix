from django.http import HttpResponse
from . import models
from . import location_list
import datetime
def index(request):
    # if request.method == "GET":

    # Delete all database records to ensure we don't have duplicate records:
    models.Location.objects.all().delete()

    ct = str(datetime.datetime.now())
    list = location_list.create_list()

    # Add every forecast location (from location_list.py) to postgres DB
    for i in list:
        location = models.Location.objects.create(
            name=i.name, latitude=i.lat, longitude=i.long, created_at=ct, updated_at=ct)
        location.save()

    # Return all locations seeded as a sanity check
    locations = models.Location.objects.values('name', 'latitude', 'longitude')
    return HttpResponse(locations)
