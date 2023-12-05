import { Home } from "./components/Home";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/privacy-policy',    
    element: <PrivacyPolicy />
  }
];

export default AppRoutes;
