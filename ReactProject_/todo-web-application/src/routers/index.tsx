import { createBrowserRouter } from "react-router";
import Root from "../pages/Root.tsx";
import Home from "../pages/Home.tsx";

const _ROUTER = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

export default _ROUTER;
