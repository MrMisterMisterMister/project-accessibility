import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

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
