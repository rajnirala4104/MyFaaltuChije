import React from "react";
import { Button } from "./Button";

export const DialPad = ({
  theme,
  setEquationFunc,
  equation,
  setResultValueFunc,
}: {
  theme: string;
  setEquationFunc: React.Dispatch<React.SetStateAction<string>>;
  equation: string;
  setResultValueFunc: React.Dispatch<React.SetStateAction<undefined>>;
}) => {
  const clickHandler = (btnValue: string) => {
    setEquationFunc((eq) => eq + btnValue);
  };

  const result = () => {
    setResultValueFunc(eval(equation));
  };

  return (
    <div
      className={`flex my-[1em] justify-evenly flex-col min-h-[15rem] min-w-[100%]`}
    >
      <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("7")}
        >
          <Button
            value="7"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("8")}
        >
          <Button
            value="8"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("9")}
        >
          <Button
            value="9"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`btnsContainer  bg-${theme}-400 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => console.log("BACKSPACE")}
        >
          <Button
            value="<"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
      </div>
      <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("4")}
        >
          <Button
            value="4"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("5")}
        >
          <Button
            value="5"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("6")}
        >
          <Button
            value="6"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("+")}
        >
          <Button
            value="+"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
      </div>
      <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("1")}
        >
          <Button
            value="1"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("2")}
        >
          <Button
            value="2"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("3")}
        >
          <Button
            value="3"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("-")}
        >
          <Button
            value="-"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
      </div>
      <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler(".")}
        >
          <Button
            value="."
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("0")}
        >
          <Button
            value="0"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            } text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("/")}
        >
          <Button
            value="/"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            }text-${theme}-900`}
          />
        </div>
        <div
          className={`${theme === "red" ? "bg-red-200" : ""} ${
            theme === "blue" ? "bg-blue-200" : ""
          } ${theme === "green" ? "bg-green-200" : ""} ${
            theme === "purple" ? "bg-purple-200" : ""
          } bg-${theme}-200 min-w-[3rem] shadow-md justify-center py-2 hover:${
            theme === "red" ? "bg-red-300" : ""
          } ${theme === "blue" ? "hover:bg-blue-300" : ""} hover:${
            theme === "green" ? "bg-green-300" : ""
          } ${theme === "purple" ? "hover:bg-purple-300" : ""} flex rounded-md`}
          onClick={() => clickHandler("X")}
        >
          <Button
            value="X"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            }text-${theme}-900`}
          />
        </div>
      </div>
      <div className=" flex justify-around items-center flex-row -space-x-4 min-w-[100%]">
        <div
          className={`btnsContainer shadow-md ${
            theme === "red" ? "bg-red-400" : ""
          }${theme === "blue" ? "bg-blue-400" : ""} ${
            theme === "green" ? "bg-green-400" : ""
          } ${
            theme === "purple" ? "bg-purple-400" : ""
          }  bg-${theme}-400 px-12 py-2 ${
            theme === "red" ? "hover:bg-red-300" : ""
          } ${theme === "blue" ? "hover:hover:bg-blue-300" : ""} ${
            theme === "green" ? "hover:bg-green-300" : ""
          } ${
            theme === "purple" ? "hover:bg-purple-300" : ""
          }  flex rounded-md`}
          onClick={() => setEquationFunc("")}
        >
          <Button
            value="Reset"
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            }text-${theme}-900`}
          />
        </div>
        <div
          className={`btnsContainer shadow-md ${
            theme === "red" ? "bg-red-400" : ""
          }${theme === "blue" ? "bg-blue-400" : ""} ${
            theme === "green" ? "bg-green-400" : ""
          } ${
            theme === "purple" ? "bg-purple-400" : ""
          }  bg-${theme}-400 px-12 py-2 
          
          ${theme === "red" ? "hover:bg-red-300" : ""} 
          
          ${theme === "blue" ? "hover:hover:bg-blue-300" : ""} 
          
          ${theme === "green" ? "hover:bg-green-300" : ""} 
          ${theme === "purple" ? "hover:bg-purple-300" : ""}  flex rounded-md`}
          onClick={() => result()}
        >
          <Button
            value="="
            customClassName={`${theme === "red" ? "text-red-900" : ""} ${
              theme === "blue" ? "text-blue-900" : ""
            } ${theme === "green" ? "text-green-900" : ""} ${
              theme === "purple" ? "text-purple-900" : ""
            }text-${theme}-900`}
          />
        </div>
      </div>
    </div>
  );
};
