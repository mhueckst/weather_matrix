/**
 * Queries the weather.gov API for a forecast at the lat/long taken from the location table.
 * Returns an array of forecast icons 
 */


// Build forecast URL from lat/long URL query's json
import {FastifyReply, FastifyRequest} from "fastify";

export async function getForecastIcons(lat: any, long: any) {
	const baseURL = "https://api.weather.gov/points/";
	let locationQueryURL = baseURL + lat + "," + long;
	const response = await fetch(locationQueryURL);

	const JSON = await response.json();
	const forecastQueryURL = JSON.properties.forecast;

	// console.log(forecastQueryURL + "From inner")
	const response2 = await fetch(forecastQueryURL);
	const JSON2 = await response2.json();

	let icons = [];
	let periods = JSON2.properties.periods;
	for (let i = 0; i < periods.length; i++){
		icons[i] = periods[i].icon;
	}
	return icons;
}


// const geoJSON = fetch(testURL).then(res => res.json());

// const json = geoJSON();
// let geoJSON = app.get(`/${testURL}`, async(request: FastifyRequest, reply: FastifyReply) => {
//
// })