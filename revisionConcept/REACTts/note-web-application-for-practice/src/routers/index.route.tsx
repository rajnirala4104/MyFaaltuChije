import { createBrowserRouter } from "react-router-dom";
import { About, Home, Root } from "../pages";

export const _ROUTER = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children: [
      {
        index:true,
        element: <Home />
      }, {
        path: "/about",
        element: <About />
      }
    ]
  }
])








// ------------------------------------
/*
Router
│
└── /
    │
    └── Root
        │
        ├── index
        │    └── Home
        │
        └── about
             └── About

*/
