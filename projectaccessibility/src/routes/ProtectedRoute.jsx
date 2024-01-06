import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

// Protected route component
// This wraps certain pages that require authentication, so not everyone can access it
const ProtectedRoute = () => {
    // Get the token from the context object
    const { token } = useAuth();

    // Check if the user is authenticated by looking at the token
    if (!token) {
        // Send user back to login if they aren't authenticated
        // Need to also display an error
        return <Navigate to="/login" />;
    }

    // Render the child
    return <Outlet />;
};

export { ProtectedRoute };
