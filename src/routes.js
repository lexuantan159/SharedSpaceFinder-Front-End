import { Navigate, useRoutes } from "react-router-dom";
import Admin from './pages/Admin'
import User from "./pages/Users/User";
import Owner from "./pages/Owner/Owner";

function Route () {
  const routes = useRoutes(
    [
      {
        path: "/",
        element: <Navigate to="dashboard" />,
      },
      {
        path: "/Dashboard",
        element: (
            <Admin />
        ),
      },
      {
        path: "/Users",
        element: (
            <User />
        ),
      },
      {
        path: "/Owner",
        element: (
            <Owner />
        ),
      },
      
    ]
  );
  return routes;
}



export default Route;