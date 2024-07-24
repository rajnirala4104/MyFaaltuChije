import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import NotFound from "../pages/NotFound";
import Authentication from "../pages/Authentication";

export const _ROUTER = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/user-profile',
            element: <UserProfile />
         },
         {
            path: '*',
            element: <NotFound />
         },
         {
            path: '/auth',
            element: <Authentication />,
            children: [
               {
                  path: '/auth/login',
                  element: <Authentication />
               },
               {
                  path: "/auth/register",
                  element: <Authentication />
               }
            ]
         },
      ]
   }
])