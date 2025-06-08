import { createContext } from "react";
import type { ActiveTaskContextInterface, InputTaskPopupContextInterface } from "../types";

export const InputTaskPopupContext = createContext<InputTaskPopupContextInterface>({
  isInputTaskOn: false,
  setIsInputTaskOn: () => false
})

export const ActiveTaskContext = createContext<ActiveTaskContextInterface>({
  activeTask: [],
  setActiveTask: () => []
})
