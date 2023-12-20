import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Account } from "./pages/Account";
import { Cookies } from "./pages/Cookies";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccessDenied from "./pages/AccessDenied";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/privacy-policy',    
    element: <PrivacyPolicy />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/cookies',
    element: <Cookies />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    path: '/AccessDenied',
    element: <AccessDenied/>
  },
];

export default AppRoutes;
