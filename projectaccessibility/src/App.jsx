import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
    }

    useEffect(() => {
        /* global goole */
        google.accounts.id.initialize({
            client_id: "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        );

    }, []);

    return (
        <Router>
            <Routes>
                {Pages.map((page, index) => (
                    <Route
                        key={index}
                        path={page.path}
                        element={<page.element />}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
