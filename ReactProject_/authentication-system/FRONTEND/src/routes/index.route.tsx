import { createBrowserRouter } from "react-router-dom";

export const _ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        paht: "/about",
        element: <About />
      }
    ]
  }
])


