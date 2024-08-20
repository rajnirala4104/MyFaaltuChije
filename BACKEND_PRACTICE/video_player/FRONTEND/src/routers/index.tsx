import { createBrowserRouter } from "react-router-dom";
import { Accounts } from "../pages/Accounts";
import { Home } from "../pages/Home";
import { Root } from "../pages/Root";
import { UserProfile } from "../pages/UserProfile";

export const _ROUTES = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/account",
            element: <Accounts />,
         },
         {
            path: "/user-profile",
            element: <UserProfile />,
         },
      ],
   },
]);
