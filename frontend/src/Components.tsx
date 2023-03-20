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
        <div>
        {icons.map(() =>
        <ul id="icons">
            {icons.map((icon, index) => <img src={icon[index]}/>)}
        </ul>
        )}
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

    // add code to get locations 'array' to use at each
    return (
        <div id="names">
            <ul id="names">
                {locations.map((location: {name: string, id: string}, index) => <li key={index}>{location.name}</li>)}
            </ul>
        </div>

    );
}
