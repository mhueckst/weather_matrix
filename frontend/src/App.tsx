import './App.css'
import { Link, Route, Routes } from 'react-router-dom';

import {Icons, Locations} from "./Components";

function App() {
    return (
        <div className = "App">
            <h1>PNW Weather Matrix</h1>
            <Icons/>
            <Locations/>
        </div>
    )
}

export default App
