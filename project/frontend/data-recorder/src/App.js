import { Fragment, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { FormPopupProvider } from "./Contexts";
import { _ROUTER } from "./routers";

function App() {
   const [formPopup, setFormPopup] = useState(false);
   return (
      <Fragment>
         <FormPopupProvider.Provider value={{ formPopup, setFormPopup }}>
            <RouterProvider router={_ROUTER} />
         </FormPopupProvider.Provider>
      </Fragment>
   );
}

export default App;
