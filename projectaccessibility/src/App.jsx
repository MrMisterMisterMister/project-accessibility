import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function App () {
    const [clientId, setClientId] = useState(null);

    function handleCallbackResponse (response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
    }

    useEffect(() => {
        async function fetchGoogleClientId () {
            try {
                const response = await axios.get("http://localhost:5000/GoogleSignIn/googleClientId");
                setClientId(response.data.clientId);

                /* global goole */
                google.accounts.id.initialize({
                    client_id: response.data.clientId,
                    callback: handleCallbackResponse
                });

                google.accounts.id.renderButton(
                    document.getElementById("signInDiv"),
                    { theme: "outline", size: "large", locale: "nl"}
                );

                google.accounts.id.prompt();

            } catch (error) {
                console.log("Error axiosing cleint ID: " + error);
            }
        }

        fetchGoogleClientId();
    }, []);

    var accessToken = gapi.auth.getToken().access_token;

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
