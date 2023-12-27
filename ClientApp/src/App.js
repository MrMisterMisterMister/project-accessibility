import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import ScrollTop from "./components/ScrollTop";
import { useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from '../../node_modules/jwt-decode/build/cjs/index';

function App() {

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
    }

    useEffect(() => {
        /* global google */

        axios.get('/config') // Replace with your API endpoint
            .then((response) => {
                const { client_id: clientId } = response.data.GoogleAuth;

                // Use the clientId retrieved from the backend
                google.accounts.id.initialize({
                    client_id: clientId,
                    callback: handleCallbackResponse
                });

                google.accounts.id.renderButton(
                    document.getElementById("signInDiv"),
                    { theme: "outline", size: "large" }
                );
            })
            .catch((error) => {
                // Handle error while fetching the client ID
                console.error('Error fetching client ID:', error);
            });
    }, []);

    return (
        <Layout>
            <ScrollTop />
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </Layout>
    );
}

App.displayName = 'App';
export default App;