import { createContext } from "react";

import { taskPopupInterface } from '../interfaces/index'

export const TaskInfoProvider = createContext<taskPopupInterface>({
  taskPopup: false,
  setTaskPopup: () => { }
})