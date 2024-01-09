import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

// Protected route component
// This wraps certain pages that require authentication, so not everyone can access it
const ProtectedRoute = observer(() => {
    // Get the token from the context object
    const { authStore: { token } } = useStore();

    // Check if the user is authenticated by looking at the token
    if (!token) {
        // Send user back to login if they aren't authenticated
        // Need to also display an error
        return <Navigate to="/login" />;
    }

    // Render the child
    return <Outlet />;
});

export { ProtectedRoute };
