import React, { Fragment, useContext } from "react";
import { FormPopupProvider, UserInfoPopupProvider } from "../Contexts";
import { DataTable, UserInfoPopup } from "../components";
import { Form } from "../components/Form";

export const Home = () => {
   const { formPopup, setFormPopup } = useContext(FormPopupProvider);
   const { userInfoPopup } = useContext(UserInfoPopupProvider);

   return (
      <Fragment>
         <section className="w-full h-[90vh] bg-lime-200 flex flex-col  justify-center items-center">
            {userInfoPopup ? <UserInfoPopup /> : ""}
            {formPopup ? <Form /> : ""}
            <DataTable />
            <div className=" my-4">
               <button
                  onClick={() => setFormPopup(!formPopup)}
                  className="bg-green-600 px-4 py-2 rounded-md text-lime-300 font-bold"
               >
                  Add Data
               </button>
            </div>
         </section>
      </Fragment>
   );
};
