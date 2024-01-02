import React, { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

// Create a context for authentication
const AuthContext = createContext();

// This component manages the authentication state
// Provides the contextValue to the children
const AuthProvider = ({ children }) => {
    // State for the token
    // This way other components are able to use it
    // For example, the login needs to somehow set it, so only way is to use a hook
    const [token, setToken] = useState("");

    // Helps to optimize performance if only the token state is changed
    const contextValue = useMemo(() => ({ token, setToken }), [token]);

    // Provides the authentication context to the children
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Define propTypes for the AuthProvider
// The children property will be all nodes
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// Makes it so you can get access to the authentication context
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
