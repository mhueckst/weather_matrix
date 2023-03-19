
class Location_List:
    def __init__(self):
        pass

    def __init__(self, name, lat, long):
        self.name = name
        self.lat = lat
        self.long = long

def create_list():
    list =  [['Mt. Hood, OR', 45.37362, -121.69603],
             ['Mt Rainier, WA', 46.85321, -121.76027],
             ['Mt Adams, WA', 46.20431, -121.49025],
             ['Portland, OR', 45.51068, -122.64914],
             ['Smith Rock, OR', 44.36583, -121.14590],
             ['Beacon Rock, OR', 45.62744, -122.02088],
             ['Index, WA', 47.81811, -121.57252],
             ['Leavenworth, WA', 47.54247, -120.73442]]
    output = []
    for i in list:
        location = Location_List(i[0], i[1], i[2])
        output.append(location)

    return output

