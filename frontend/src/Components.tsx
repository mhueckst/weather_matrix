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

                    {loc.icons.map((icon, index) =>
                        <figure className="figure">
                            <img src={icon} className="icon"/>
                            <figcaption className="caption">Period {index}</figcaption>
                        </figure>)}
                </ul>
                </div>
            )}
        </div>
    );
}

// export const Icons = () => {
//     const [icons, setIcons] = useState([]);
//
//     useEffect(() => {
//         const fetchIcons = async() => {
//             const icons = await axios.get("http://localhost:8080/lat_long");
//             setIcons(icons.data);
//         }
//         fetchIcons();
//     }, []);
//
//     // add code to get locations 'array' to use at each
//     return (
//         <div className="icons">
//             {icons ?
//
//                 icons.map((icon) =>
//                     <ul key={icon['id']}>
//                         {icons.map((icon, index) => <img src={icon[index]}/>)}
//                     </ul>
//                 ) : null
//             }
//         </div>
//     );
// }
// export const Locations = () => {
//     const [locations, setLocations] = useState([]);
//
//     useEffect(() => {
//         const fetchLocations = async() => {
//             const locations = await axios.get("http://localhost:8080/location_names");
//             setLocations(locations.data);
//         }
//         fetchLocations();
//     }, []);
//
//     return (
//         <div className="names">
//             {locations ?
//             <ul id="names">
//                 {locations.map((location: {name: string, id: string}, index) => <li key={index}>{location.name}</li>)}
//             </ul>
//                 : null }
//         </div>
//
//     );
// }

//
// export const Seeder = () => {
//     const [seeder, setSeeder] = useState([]);
//
//     useEffect(() => {
//         const seedLocations = async() => {
//             const seeder = await axios.get("http://localhost:8000/dbSeed/");
//             setSeeder(seeder.data);
//         }
//         seedLocations();
//     }, []);
//     return (
//         <div className="seeder">
//         </div>
//     );
// }