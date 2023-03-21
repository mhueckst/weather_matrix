import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="dev-ybu4f2cdewusjjpp.us.auth0.com"
                clientId="8B3p34EZqfiP6RCXECUkBL0gdveyDD1V"
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >
            <App />
            </Auth0Provider>,
        </BrowserRouter>
    </React.StrictMode>,
)

