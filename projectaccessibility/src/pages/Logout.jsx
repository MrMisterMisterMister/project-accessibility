import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// TESTING ONLY, will be modified later
// very simple logout
// this will not be how we handle it actually, but it's for testing only
const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const aa = () => {
            Cookies.remove("token");
            if (!Cookies.get("token")) {
                navigate("/login", { replace: true });
            }
        };
        aa();
    }, [navigate]
    );
};

export default Logout;
