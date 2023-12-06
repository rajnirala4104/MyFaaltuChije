import { Fragment, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { FormPopupProvider, UserInfoPopupProvider } from "./Contexts";
import { _ROUTER } from "./routers";

function App() {
   const [formPopup, setFormPopup] = useState(false);
   const [userInfoPopup, setUserInfoPopup] = useState(false);
   return (
      <Fragment>
         <FormPopupProvider.Provider value={{ formPopup, setFormPopup }}>
            <UserInfoPopupProvider.Provider value={{ userInfoPopup, setUserInfoPopup }}>
               <RouterProvider router={_ROUTER} />
            </UserInfoPopupProvider.Provider>
         </FormPopupProvider.Provider>
      </Fragment>
   );
}

export default App;
