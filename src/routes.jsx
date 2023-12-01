import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATHS } from "./constants/routes";
import Layout from "./pages/Layout";
import AboutUs from "./pages/AboutUs";
const router = createBrowserRouter([
  {
    path: `/${ROUTE_PATHS?.layout}`,
    element: <Layout />,
  },
  {
    path: `/${ROUTE_PATHS?.aboutus}`,
    element: <AboutUs />,
  },
]);

export default router;
