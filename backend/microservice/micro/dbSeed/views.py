from django.http import HttpResponse
# from models import Location
from . import models

def index(request):
    # return HttpResponse("Hello world, you're at the dbSeed index")
    if request.method == "GET":
        locations = models.Location.objects.values('name', 'latitude', 'longitude')
        # location = models.Location.objects.create(
        #     name="Mt Hood", lat=45.373, long=-121.696)
        # location.save()

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

