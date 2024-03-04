import React, { useState } from "react";
import { Themes } from "./components/Themes";
import { Calculator } from "./page/Calculator";

function App() {
  const [theme, setTheme] = useState<string>("blue");

  return (
    <div className="App">
      <div
        className={`${theme === "red" ? "bg-red-100" : ""} ${
          theme === "blue" ? "bg-blue-100" : ""
        } ${theme === "green" ? "bg-green-100" : ""} ${
          theme === "green" ? "bg-green-100" : ""
        } ${
          theme === "purple" ? "bg-purple-100" : ""
        } my-auto flex-col mx-auto min-h-[100vh] flex justify-center items-center`}
      >
        <Themes changeTheme={setTheme} />
        <Calculator theme={theme} />
      </div>
    </div>
  );
}

export default App;
