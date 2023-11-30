import React, { Fragment, useContext } from "react";
import { FormPopupProvider } from "../Contexts";
import { DataTable } from "../components";
import { Form } from "../components/Form";

export const Home = () => {
   const { formPopup, setFormPopup } = useContext(FormPopupProvider);

   return (
      <Fragment>
         <section className="w-full h-[90vh] bg-lime-200 flex flex-col border border-red-500 justify-center items-center">
            {formPopup ? <Form /> : ""}
            <DataTable />
            <div className="border borderblue-500 my-4">
               <button
                  onClick={() => setFormPopup(!formPopup)}
                  className="bg-green-600 px-4 py-2 roudned-md text-lime-300 font-bold"
               >
                  Add Data
               </button>
            </div>
         </section>
      </Fragment>
   );
};
