import React, { createContext, useContext, useState } from "react";
import { taskInterface } from "../interfaces";
import { dummyTaskData } from "../data/dummyTaskData";

export const appContext = createContext([{}]);
export const AppContextProvider = ({ element }: any) => {

    const [tasks, setTasks] = useState<taskInterface[]>(dummyTaskData)

    return (
        <appContext.Provider value={{ tasks, setTasks }}>
            {element}
        </appContext.Provider>
    )
}

export const AppState = () => {
    return useContext(appContext)
}