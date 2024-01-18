import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { createEndpoint } from "../api/axiosClient";
import Cookies from "js-cookie";

// When a user decides to logout
// Send a post request to api server, which then deletes/revokes the cookie and the refreshtoken
const Logout = observer(() => {
    // Navigate
    const navigate = useNavigate();
    // store
    const { userStore, authStore } = useStore();
    // Functional component
    useEffect(() => {
        const removeCookie = async (cookie) => {
            // Send the cookie name to the server for removal
            await createEndpoint("cookies/removecookie").post(cookie);
        };

        const logout = () => {
            removeCookie("userCookie");
            removeCookie("refreshToken");
            Cookies.remove("token");
            navigate("/login", { replace: true });
            userStore.setUser(null); // Reset it
            authStore.setToken(null);
        };

        logout();
    }, [navigate]); // Mount on navigate
});

export default Logout;
