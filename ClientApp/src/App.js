import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import ScrollTop from "./components/ScrollTop";
import { useEffect } from 'react';
//import jwtDecode from "jwt-decode";
import { jwtDecode } from '../../node_modules/jwt-decode/build/cjs/index';

function App() {

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject); 
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "207599687687-b8qecsbfsauc1p6orj6266lgcl5p169d.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
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