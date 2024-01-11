import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Sitemap from "../pages/Sitemap";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Cookies from "../pages/Cookies";
import PageNotFound from "../pages/404";
import AboutUs from "../pages/About_Us";
import Dashboard from "../pages/Dashboard";

// Route component
// This here handles all the routing in the application
const Routes = () => {
    // Routes that can be viewed by everyone
    const publicRoutes = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/sitemap",
            element: <Sitemap />
        },
        {
            path: "/privacy-policy",
            element: <PrivacyPolicy />
        },
        {
            path: "/cookies",
            element: <Cookies />
        },
        {
            path: "*",
            element: <PageNotFound />
        },
        {
            path: "/aboutus",
            element: <AboutUs />
        }
        
    ];

    // Routes for the dashboard
    // Only authenticated users can view these
    const authenticatedRoutes = [
        {
            path: "/dashboard",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />
                }
            ]
        }
    ];

    // This one creates a browser router with the defined routes earlier
    // Checks the user authentication
    const router = createBrowserRouter([
        ...publicRoutes,
        ...authenticatedRoutes
    ]);

    // The application gets the router that has been provided
    return <RouterProvider router={router} />;
};

export default Routes;
