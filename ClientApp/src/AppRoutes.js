import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Account } from "./pages/Account";
import { Cookies } from "./pages/Cookies";

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
  }
];

export default AppRoutes;
