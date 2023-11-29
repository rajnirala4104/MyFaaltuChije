import { createBrowserRouter } from "react-router-dom";
import { Home, Root, Users } from "../pages";

export const _ROUTER = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/users",
            element: <Users />,
         },
      ],
   },
]);
