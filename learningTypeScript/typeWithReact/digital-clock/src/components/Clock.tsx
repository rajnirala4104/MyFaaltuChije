import React, { Fragment, useEffect, useState } from "react";
import { SingleUnit } from ".";

interface time {
   seconds: number;
   minutes: number;
   hours: number;
}

const Clock: React.FC = () => {
   const [time, setTime] = useState<time>({
      hours: 0,
      minutes: 0,
      seconds: 0,
   });

   useEffect(() => {
      const secondTimeInterval = setInterval(() => {
         setTime({ ...time, seconds: time.seconds + 1 });
      }, 1000);

      return () => {
         clearInterval(secondTimeInterval);
      };
   });

   useEffect(() => {
      if (time.seconds >= 60) {
         setTime({ ...time, seconds: 0 });
         setTime({ ...time, minutes: time.minutes + 1 });
      }

      if (time.minutes >= 60) {
         setTime({ ...time, seconds: 0 });
         setTime({ ...time, minutes: 0 });
         setTime({ ...time, hours: time.hours + 1 });
      }
   }, [time]);

   console.log("re-render");

   return (
      <Fragment>
         <section className="">
            <div className="w-full h-screen bg-blue-950 grid place-items-center">
               <div className="flex justify-center flex-col items-center">
                  <div className="w-50 flex gap-x-2">
                     <SingleUnit unit="Hours" value={time.hours} />
                     <SingleUnit unit="Minutes" value={time.minutes} />
                     <SingleUnit unit="Seconds" value={time.seconds} />
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
