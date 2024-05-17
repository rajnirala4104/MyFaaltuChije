import React, { Fragment, useEffect, useState } from "react";
import { SingleUnit } from ".";

const Clock: React.FC = () => {
   const [seconds, setSeconds] = useState<number>(0);
   const [minutes, setMinutes] = useState<number>(0);
   const [hours, setHours] = useState<number>(0);

   useEffect(() => {
      const secondTimeInterval = setInterval(() => {
         setSeconds(seconds + 30);
      }, 1000);

      return () => {
         clearInterval(secondTimeInterval);
      };
   });

   useEffect(() => {
      if (seconds >= 60) {
         setSeconds(0);
         setMinutes(minutes + 10);
      }

      if (minutes >= 60) {
         setSeconds(0);
         setMinutes(0);
         setHours(hours + 10);
      }
   }, [seconds, minutes, hours]);

   console.log("re-render");

   return (
      <Fragment>
         <section className="">
            <div className="w-full h-screen bg-blue-950 grid place-items-center">
               <div className="flex justify-center flex-col items-center">
                  <div className="w-50 flex gap-x-2">
                     <SingleUnit unit="Hours" value={hours} />
                     <SingleUnit unit="Minutes" value={minutes} />
                     <SingleUnit unit="Seconds" value={seconds} />
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
