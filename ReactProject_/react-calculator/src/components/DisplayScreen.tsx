import React from "react";
import { DisplayScreenInterface } from "../interfaces";

export const DisplayScreen: React.FC<DisplayScreenInterface> = (props) => {
   if (!props.result) {
      return (
         <div
            className={`${props.theme === "red" ? "bg-red-300" : ""} ${
               props.theme === "blue" ? "bg-blue-300" : ""
            } ${props.theme === "green" ? "bg-green-300" : ""} ${
               props.theme === "purple" ? "bg-purple-300" : ""
            } bg-${
               props.theme
            }-300 px-3 min-w-[100%] min-h-[6rem] shadow-inner rounded-md flex flex-col justify-center items-end`}
         >
            {/* <p className="text-blue-700">{equation}</p> */}
            <h2
               className={`text-4xl ${
                  props.theme === "red" ? "text-red-900" : ""
               } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                  props.theme === "green" ? "text-green-900" : ""
               } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                  props.theme
               }-950`}
            >
               {props.equationValue}
            </h2>
         </div>
      );
   } else {
      return (
         <div
            className={`${props.theme === "red" ? "bg-red-300" : ""} ${
               props.theme === "blue" ? "bg-blue-300" : ""
            } ${props.theme === "green" ? "bg-green-300" : ""} ${
               props.theme === "purple" ? "bg-purple-300" : ""
            } bg-${
               props.theme
            }-300 px-3 min-w-[100%] min-h-[6rem] shadow-inner rounded-md flex flex-col justify-center items-end`}
         >
            <p
               className={`text-${props.theme}-700 ${
                  props.theme === "red" ? "text-red-800" : ""
               } ${props.theme === "blue" ? "text-blue-800" : ""} ${
                  props.theme === "green" ? "text-green-800" : ""
               } ${props.theme === "purple" ? "text-purple-800" : ""}`}
            >
               {props.equationValue}
            </p>
            <h2
               className={`text-4xl ${
                  props.theme === "red" ? "text-red-900" : ""
               } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                  props.theme === "green" ? "text-green-900" : ""
               } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                  props.theme
               }-950`}
            >
               {props.result}
            </h2>
         </div>
      );
   }
};
