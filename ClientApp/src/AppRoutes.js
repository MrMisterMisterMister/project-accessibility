import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Account } from "./pages/Account";

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
  }
];

export default AppRoutes;
