import './App.css'
import { Link, Route, Routes } from 'react-router-dom';

import {Icons, Locations, Seeder} from "./Components";

function App() {
    return (
        <div className = "App">
            <h1>PNW Weather Matrix</h1>
            <Seeder/>
            <Icons/>
            <Locations/>
        </div>
    )
}


export default App
