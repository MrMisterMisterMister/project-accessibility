import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../api/axiosClient";
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
            await postRequest("cookies/removecookie", cookie);
            Cookies.remove("token");
        };

        // Remove cookie and redirect back to login
        removeCookie("userCookie");
        navigate("/login", { replace: true });
    }, [navigate]); // Mount on navigate
};

export default Logout;
