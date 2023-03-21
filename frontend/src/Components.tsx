import {useEffect, useState} from "react";
import axios from "axios";

export const Icons = () => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const fetchIcons = async() => {
            const icons = await axios.get("http://localhost:8080/lat_long");
            setIcons(icons.data);
        }
        fetchIcons();
        }, []);

    // add code to get locations 'array' to use at each
    return (
        <div className="icons">
            {icons ?

            icons.map(() =>
                <ul>
                    {icons.map((icon, index) => <img src={icon[index]}/>)}
                </ul>
            ) : null
            }
        </div>
    );
}

export const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async() => {
            const locations = await axios.get("http://localhost:8080/location_names");
            setLocations(locations.data);
        }
        fetchLocations();
    }, []);

    return (
        <div className="names">
            {locations ?
            <ul id="names">
                {locations.map((location: {name: string, id: string}, index) => <li key={index}>{location.name}</li>)}
            </ul>
                : null }
        </div>

    );
}


export const Seeder = () => {
    const [seeder, setSeeder] = useState([]);

    useEffect(() => {
        const seedLocations = async() => {
            const seeder = await axios.get("http://localhost:8000/dbSeed/");
            setSeeder(seeder.data);
        }
        seedLocations();
    }, []);
    return (
        <div id="seeder">
        </div>
    );
}