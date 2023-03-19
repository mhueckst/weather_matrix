from django.http import HttpResponse
from . import models
from . import location_list
import datetime
def index(request):
    # if request.method == "GET":
    ct = str(datetime.datetime.now())
    list = location_list.create_list()

    for i in list:
        location = models.Location.objects.create(
            name=i.name, latitude=i.lat, longitude=i.long, created_at=ct, updated_at=ct)
    # location = models.Location.objects.create(
    #     name="Mt Hood", latitude=45.373, longitude=-121.696, created_at ="2023-03-19 21:45:09.257563", updated_at="2023-03-19 21:45:09.257563")
        location.save()
    locations = models.Location.objects.values('name', 'latitude', 'longitude')


    return HttpResponse(locations)

    'Mt. Hood, OR', 45.37362, -121.69603
    'Mt Rainier, WA', 46.85321, -121.76027
    'Mt Adams, WA', 46.20431, -121.49025
    'Portland, OR', 45.51068, -122.64914
    'Smith Rock, OR', 44.36583, -121.14590
    'Beacon Rock, OR', 45.62744, -122.02088
    'Index, WA', 47.81811, -121.57252
    'Leavenworth, WA', 47.54247, -120.73442

    #make list of forecast locations to save to DB:

