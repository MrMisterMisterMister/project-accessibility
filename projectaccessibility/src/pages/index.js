import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Sitemap from "./Sitemap";
import PrivacyPolicy from "./PrivacyPolicy";
import Cookies from "./Cookies";
import PageNotFound from "./404";

// All the pages
const Pages = [
    { path: "/", element: Home },
    { path: "/signup", element: Signup },
    { path: "/login", element: Login },
    { path: "/sitemap", element: Sitemap },
    { path: "/privacy-policy", element: PrivacyPolicy },
    { path: "/cookies", element: Cookies },
    { path: "*", element: PageNotFound }
];

export default Pages;
