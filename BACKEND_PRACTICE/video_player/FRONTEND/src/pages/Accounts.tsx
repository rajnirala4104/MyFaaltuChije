import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Accounts: React.FC = () => {
   const navigator = useNavigate();

   useEffect(() => {
      const loggedInUser = JSON.parse(
         localStorage.getItem("userInfo") as string
      );
      if (loggedInUser) {
         navigator("/");
      }
   }, []);

   return <div>Accounts</div>;
};
