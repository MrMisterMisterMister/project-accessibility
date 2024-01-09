import React, { useEffect } from "react";
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./stores/store";

function App () {
    const { authStore, userStore } = useStore();

    useEffect(() => {
        if (authStore.token) userStore.getUser();
    }, [authStore, userStore]);

    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;
