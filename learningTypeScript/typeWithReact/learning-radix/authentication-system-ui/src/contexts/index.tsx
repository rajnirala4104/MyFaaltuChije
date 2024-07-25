import { createContext } from "react";
import { messageBoxInterface } from "../interfaces";
export const MessageBoxContext = createContext<messageBoxInterface>({
   showMessageBox: false,
   setShowMessageBox: () => false
})