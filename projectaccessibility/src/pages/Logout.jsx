import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// TESTING ONLY, will be modified later
// very simple logout
// this will not be how we handle it actually, but it's for testing only
// TODO
// When a user decides to logout
// Send a post request to api server, which then deletes/revokes the cookie and the refreshtoken
const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const removeCookie = async (cookieName) => {
            try {
                // Send the cookie name to the server for removal
                await postRequest("cookies/removecookie", cookieName);
                console.log("Cookie removed successfully");
                
                } catch (error) {
                console.error("Error removing cookie:", error);
            }
        };

        const aa = () => {
            removeCookie("userCookie");
            navigate("/login", { replace: true });
        };

        aa();
    }, [navigate]);
};

export default Logout;
