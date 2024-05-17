import React, { Fragment } from "react";

interface time {
   value: number;
   unit: string;
}

const SingleUnit: React.FC<time> = (props) => {
   return (
      <Fragment>
         <div className="bg-white grid place-items-center w-20 h-20 rounded-md ">
            <p className="text-2xl">{props.value}</p>
            <p>{props.unit}</p>
         </div>
      </Fragment>
   );
};

export default SingleUnit;
