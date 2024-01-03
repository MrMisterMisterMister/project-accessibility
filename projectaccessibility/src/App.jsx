import React from "react";
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;
