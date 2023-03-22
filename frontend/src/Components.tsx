import {useEffect, useState} from "react";
import axios from "axios";
import './Components.css'

// interface Location {
//     id: number;
//     name: string;
//     icons: [string];
// }
//
export const Forecasts = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async() => {
            // const seedLocations = async() => {
                await axios.get("http://localhost:8000/dbSeed/");
                // setSeeder(seeder.data);

            const locations = await axios.get("http://localhost:8080/lat_long");
            setLocations(locations.data);
        }
        fetchLocations();
        }, []);

    return (
        <div className="locations">
            {
            locations.map((loc: {id: number, name: string, icons:[]}) =>
                <div className="location">
                <h3>{loc.name}</h3>
                <ul key={loc.id} className="forecastList">

                    {loc.icons.map((icon: {icon: string, period: string}, index) =>
                        <figure className="figure">
                            <img src={icon.icon} className="icon"/>
                            <figcaption className="caption">{icon.period}</figcaption>
                        </figure>)}
                </ul>
                </div>
            )}
        </div>
    );
}

