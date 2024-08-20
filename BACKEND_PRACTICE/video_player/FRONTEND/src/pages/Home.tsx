import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
   const navigator = useNavigate();

   useEffect(() => {
      const loggedInUser = JSON.parse(
         localStorage.getItem("userInfo") as string
      );
      if (!loggedInUser) navigator("/account");
   }, []);

   return (
      <Fragment>
         <div>
            <span className="text-2xl">Hello world</span>
         </div>
      </Fragment>
   );
};
