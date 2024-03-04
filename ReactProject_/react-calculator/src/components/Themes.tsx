import React from "react";
import { ThemeCircle } from "./icons";

export const Themes = ({
  changeTheme,
}: {
  changeTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <div className="flex p-4 ">
        <div onClick={() => changeTheme("red")}>
          <ThemeCircle themeColor="red" />
        </div>
        <div onClick={() => changeTheme("blue")}>
          <ThemeCircle themeColor="blue" />
        </div>
        <div onClick={() => changeTheme("green")}>
          <ThemeCircle themeColor="green" />
        </div>
        <div onClick={() => changeTheme("purple")}>
          <ThemeCircle themeColor="purple" />
        </div>
      </div>
    </>
  );
};
