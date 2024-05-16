import React, { Fragment } from "react";
import { SingleUnit } from ".";

const Clock: React.FC = () => {
   return (
      <Fragment>
         <section className="">
            <div className="w-full h-screen bg-blue-950 grid place-items-center">
               <div className="flex justify-center flex-col items-center">
                  <div className="w-50 flex gap-x-2">
                     <SingleUnit unit="Hours" value={"00"} />
                     <SingleUnit unit="Minutes" value={"00"} />
                     <SingleUnit unit="Seconds" value={"00"} />
                  </div>
                  <div className="btn my-3">
                     <button className="text-white font-bold bg-cyan-900 p-3 rounded-md hover:bg-black ">
                        Start Time
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </Fragment>
   );
};

export default Clock;
