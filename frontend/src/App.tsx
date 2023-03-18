import './App.css'
import { Link, Route, Routes } from 'react-router-dom';

import {Icons, Locations} from "./Components";

function App() {
    return (
        <div className = "App">
            <Icons/>
            <Locations/>
        </div>
    )
}

export default App
