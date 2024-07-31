import React from "react";
import { DialPadInterface } from "../interfaces";
import { Button } from "./Button";

export const DialPad: React.FC<DialPadInterface> = (props) => {
   const clickHandler = (btnValue: string) => {
      props.setEquationFunc((eq) => eq + btnValue);
   };

   const result = () => {
      props.setResultValueFunc(eval(props.equation));
   };

   return (
      <div
         className={`flex my-[1em] justify-evenly flex-col min-h-[15rem] min-w-[100%]`}
      >
         <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("7")}
            >
               <Button
                  value="7"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("8")}
            >
               <Button
                  value="8"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("9")}
            >
               <Button
                  value="9"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`btnsContainer  bg-${
                  props.theme
               }-400 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => console.log("BACKSPACE")}
            >
               <Button
                  value="<"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
         </div>
         <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("4")}
            >
               <Button
                  value="4"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("5")}
            >
               <Button
                  value="5"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("6")}
            >
               <Button
                  value="6"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("+")}
            >
               <Button
                  value="+"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
         </div>
         <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("1")}
            >
               <Button
                  value="1"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("2")}
            >
               <Button
                  value="2"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("3")}
            >
               <Button
                  value="3"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("-")}
            >
               <Button
                  value="-"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
         </div>
         <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler(".")}
            >
               <Button
                  value="."
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("0")}
            >
               <Button
                  value="0"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""} text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("/")}
            >
               <Button
                  value="/"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""}text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`${props.theme === "red" ? "bg-red-200" : ""} ${
                  props.theme === "blue" ? "bg-blue-200" : ""
               } ${props.theme === "green" ? "bg-green-200" : ""} ${
                  props.theme === "purple" ? "bg-purple-200" : ""
               } bg-${
                  props.theme
               }-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
                  props.theme === "red" ? "bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
                  props.theme === "green" ? "bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               } flex rounded-md`}
               onClick={() => clickHandler("*")}
            >
               <Button
                  value="x"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""}text-${
                     props.theme
                  }-900`}
               />
            </div>
         </div>
         <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
            <div
               className={`btnsContainer shadow-md ${
                  props.theme === "red" ? "bg-red-400" : ""
               }${props.theme === "blue" ? "bg-blue-400" : ""} ${
                  props.theme === "green" ? "bg-green-400" : ""
               } ${props.theme === "purple" ? "bg-purple-400" : ""}  bg-${
                  props.theme
               }-400 px-12 py-2 ${
                  props.theme === "red" ? "hover:bg-red-300" : ""
               } ${props.theme === "blue" ? "hover:hover:bg-blue-300" : ""} ${
                  props.theme === "green" ? "hover:bg-green-300" : ""
               } ${
                  props.theme === "purple" ? "hover:bg-purple-300" : ""
               }  flex rounded-md`}
               onClick={() => props.setEquationFunc("")}
            >
               <Button
                  value="Reset"
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""}text-${
                     props.theme
                  }-900`}
               />
            </div>
            <div
               className={`btnsContainer shadow-md ${
                  props.theme === "red" ? "bg-red-400" : ""
               }${props.theme === "blue" ? "bg-blue-400" : ""} ${
                  props.theme === "green" ? "bg-green-400" : ""
               } ${props.theme === "purple" ? "bg-purple-400" : ""}  bg-${
                  props.theme
               }-400 px-12 py-2 
          
          ${props.theme === "red" ? "hover:bg-red-300" : ""} 
          
          ${props.theme === "blue" ? "hover:hover:bg-blue-300" : ""} 
          
          ${props.theme === "green" ? "hover:bg-green-300" : ""} 
          ${
             props.theme === "purple" ? "hover:bg-purple-300" : ""
          }  flex rounded-md`}
               onClick={() => result()}
            >
               <Button
                  value="="
                  customClassName={`${
                     props.theme === "red" ? "text-red-900" : ""
                  } ${props.theme === "blue" ? "text-blue-900" : ""} ${
                     props.theme === "green" ? "text-green-900" : ""
                  } ${props.theme === "purple" ? "text-purple-900" : ""}text-${
                     props.theme
                  }-900`}
               />
            </div>
         </div>
      </div>
   );
};
