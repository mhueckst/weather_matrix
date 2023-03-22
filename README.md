# Weather Matrix:
This site consolidates the National Weather Service point forecasts for various locations around the Pacific Northwest. 
Each location has 14 '12hr periods' of forecast data, which corresponds to about a week from the current time. 
The data is fetched using the api.weather.gov, the NWS forecast API. 

The site uses a postgres backend to hold the location data for the forecast fetches, and uses a Django microservice to 
populate the database with the location data. 
In addition, it uses the auth0-react-sdk to authenticate a user (though this functionally does nothing). 

Everything is containerized, and can be run by simply following the instructions below. 

Screenshot: 
![image](https://user-images.githubusercontent.com/68795544/227037148-1a91c32b-971d-4b03-9d41-b2e3eb25d2be.png)


# Setup: 
(All commands are with respect to the root directory of the project)

- Clone repository
- cd into repository
- (No need to copy env files)
- run `docker compose up` (this may take 5-10 mins)
- go to site URL: http://localhost:88

# Troubleshooting: 
- If you get an error about exposing a port < 1024, you can run: 
`sudo setcap cap_net_bind_service=ep $(which rootlesskit)` \
`systemctl --user restart docker`


