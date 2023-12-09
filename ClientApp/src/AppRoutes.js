import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Cookies } from "./pages/Cookies";
import { Login } from "./pages/Login";


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
    path: '/cookies',
    element: <Cookies />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default AppRoutes;
