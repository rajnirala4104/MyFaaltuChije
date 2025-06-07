import { Fragment, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import _ROUTER from './routers'
import { InputTaskPopupContext } from './context';

function App() {

  const [isInputTaskOn, setIsInputTaskOn] = useState<Boolean>(false);

  return (
    <Fragment>
      <InputTaskPopupContext.Provider value={{isInputTaskOn, setIsInputTaskOn}}>
        <RouterProvider router={_ROUTER}/>     
      </InputTaskPopupContext.Provider>
    </Fragment>
  )
}

export default App
