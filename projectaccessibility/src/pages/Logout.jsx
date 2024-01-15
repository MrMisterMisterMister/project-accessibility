import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../stores/store";
import { createEndpoint } from "../api/axiosClient";
import Cookies from "js-cookie";

// When a user decides to logout
// Send a post request to api server, which then deletes/revokes the cookie and the refreshtoken
const Logout = () => {
    // Navigate
    const navigate = useNavigate();
    // Functional component
    useEffect(() => {
        const removeCookie = async (cookie) => {
            // Send the cookie name to the server for removal
            await createEndpoint("cookies/removecookie/").post(cookie);
        };

        const logout = () => {
            removeCookie("userCookie");
            removeCookie("refreshToken");
            Cookies.remove("token");
            navigate("/login", { replace: true });
            store.userStore.setUser(null); // Reset it
        };

        logout();
    }, [navigate]); // Mount on navigate
};

export default Logout;
