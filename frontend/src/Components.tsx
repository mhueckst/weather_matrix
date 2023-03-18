import {useEffect, useState} from "react";
import axios from "axios";

export const Icons = () => {
    let keycounter = 0;
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
            <ul>
                {icons.map((icon, index) => <img src={icon[index]}/>)}
            </ul>)}
        </div>

    );
    }
