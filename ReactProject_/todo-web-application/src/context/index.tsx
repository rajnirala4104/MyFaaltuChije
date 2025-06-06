import { createContext } from "react";
import type { InputTaskPopupContextInterface } from "../types";

export const InputTaskPopupContext = createContext<InputTaskPopupContextInterface>({
  isInputTaskOn: false,
  setIsInputTaskOn: () => false
})
