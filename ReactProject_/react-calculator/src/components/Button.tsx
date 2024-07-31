import React from "react";
import { ButtonInterface } from "../interfaces";

export const Button: React.FC<ButtonInterface> = (props) => {
   return <span className={`${props.customClassName}`}>{props.value}</span>;
};
