import { RouterProvider } from "react-router-dom";
import "./App.css";
import { _ROUTES } from "./routers";

function App() {
   return <RouterProvider router={_ROUTES} />;
}

export default App;
