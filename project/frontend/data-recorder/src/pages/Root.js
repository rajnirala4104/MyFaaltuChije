import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/Navbar";

export const Root = () => {
   return (
      <Fragment>
         <Navbar />
         <Outlet />
      </Fragment>
   );
};
