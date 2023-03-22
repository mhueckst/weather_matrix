import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
    <Auth0Provider
        domain="dev-ybu4f2cdewusjjpp.us.auth0.com"
        clientId="8B3p34EZqfiP6RCXECUkBL0gdveyDD1V"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);