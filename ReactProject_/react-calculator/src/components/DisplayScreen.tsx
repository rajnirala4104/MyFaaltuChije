import React from "react";

interface Prop {
  equation: string;
  result: number | undefined;
  theme: string;
  equationValue: string;
}

export const DisplayScreen = ({
  result,
  equation,
  theme,
  equationValue,
}: Prop) => {
  if (!result) {
    return (
      <div
        className={`${theme === "red" ? "bg-red-300" : ""} ${
          theme === "blue" ? "bg-blue-300" : ""
        } ${theme === "green" ? "bg-green-300" : ""} ${
          theme === "purple" ? "bg-purple-300" : ""
        } bg-${theme}-300 px-3 min-w-[100%] min-h-[6rem] shadow-inner rounded-md flex flex-col justify-center items-end`}
      >
        {/* <p className="text-blue-700">{equation}</p> */}
        <h2
          className={`text-4xl ${theme === "red" ? "text-red-900" : ""} ${
            theme === "blue" ? "text-blue-900" : ""
          } ${theme === "green" ? "text-green-900" : ""} ${
            theme === "purple" ? "text-purple-900" : ""
          } text-${theme}-950`}
        >
          {equationValue}
        </h2>
      </div>
    );
  } else {
    return (
      <div
        className={`${theme === "red" ? "bg-red-300" : ""} ${
          theme === "blue" ? "bg-blue-300" : ""
        } ${theme === "green" ? "bg-green-300" : ""} ${
          theme === "purple" ? "bg-purple-300" : ""
        } bg-${theme}-300 px-3 min-w-[100%] min-h-[6rem] shadow-inner rounded-md flex flex-col justify-center items-end`}
      >
        <p
          className={`text-${theme}-700 ${
            theme === "red" ? "text-red-800" : ""
          } ${theme === "blue" ? "text-blue-800" : ""} ${
            theme === "green" ? "text-green-800" : ""
          } ${theme === "purple" ? "text-purple-800" : ""}`}
        >
          {equationValue}
        </p>
        <h2
          className={`text-4xl ${theme === "red" ? "text-red-900" : ""} ${
            theme === "blue" ? "text-blue-900" : ""
          } ${theme === "green" ? "text-green-900" : ""} ${
            theme === "purple" ? "text-purple-900" : ""
          } text-${theme}-950`}
        >
          {result}
        </h2>
      </div>
    );
  }
};
