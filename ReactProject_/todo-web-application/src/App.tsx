import { Fragment, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import _ROUTER from './routers'
import { ActiveTaskContext, InputTaskPopupContext } from './context';
import type { taskInterface } from './types';

function App() {

  const [isInputTaskOn, setIsInputTaskOn] = useState<Boolean>(false);
  const [activeTask, setActiveTask] = useState<taskInterface[]>([]);
  return (
    <Fragment>
      <ActiveTaskContext.Provider value={{activeTask, setActiveTask}}>
      <InputTaskPopupContext.Provider value={{isInputTaskOn, setIsInputTaskOn}}>
        <RouterProvider router={_ROUTER}/>     
      </InputTaskPopupContext.Provider>
      </ActiveTaskContext.Provider>
    </Fragment>
  )
}

export default App
