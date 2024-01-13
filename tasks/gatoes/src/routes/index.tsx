import { createBrowserRouter } from "react-router-dom";
import { Root } from "../page/Root";
import { Home } from "../page/Home";

export const _ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])