import Home from "./Home";
import Login from "./Login";
import PrivacyPolicy from "./PrivacyPolicy";
import Cookies from "./Cookies";
import PageNotFound from "./404";

// All the pages
const Pages = [
    { path: "/", element: Home },
    { path: "/login", element: Login },
    { path: "/privacy-policy", element: PrivacyPolicy },
    { path: "/cookies", element: Cookies },
    { path: "*", element: PageNotFound }
];

export default Pages;
