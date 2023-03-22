import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
// import {Seeder} from "./Components";
// import {Icons} from "./Components"
import {Forecasts} from "./Components";

function App() {
    const {isAuthenticated} = useAuth0();

    // @ts-ignore
    return (
        <div className = "App">


            <h1>PNW Weather Matrix</h1>
            {!isAuthenticated ? (
                <div>
                    <p style={{ fontSize: "1.5rem"}}>Please Login.</p>
                    <LoginButton/>
                </div>
                ) :
                <div>
                    <LogoutButton/>
                    {/*<Profile/>*/}
                </div>
            }
            {/*<Seeder/>*/}
            {/*<Icons/>*/}
            <Forecasts/>
            {/*<Locations/>*/}

        </div>
    )
}


export default App
