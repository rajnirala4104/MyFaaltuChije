import React, { useState } from "react";
import { DialPad, DisplayScreen } from "../components";

export const Calculator = ({ theme }: { theme: string }) => {
  const [resultValue, setResultValue] = useState(undefined);
  const [equation, setEquation] = useState("");

  return (
    <>
      <div
        className={`lg:scale-125 calculatorBox bg-${theme}-50 rounded-lg shadow-xl flex-col min-w-[50vh] flex justify-between items-center min-h-[60vh]`}
      >
        <DisplayScreen
          equation={"12x12"}
          result={resultValue}
          equationValue={equation}
          theme={theme}
        />
        <DialPad
          theme={theme}
          setResultValueFunc={setResultValue}
          setEquationFunc={setEquation}
          equation={equation}
        />
      </div>
    </>
  );
};
