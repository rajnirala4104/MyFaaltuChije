import { Fragment, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { _ROUTER } from './router'
import { TaskInfoProvider } from './context'

function App() {

  const [taskPopup, setTaskPopup] = useState(true)

  return (
    <Fragment>
      <TaskInfoProvider.Provider value={{ taskPopup, setTaskPopup }}>
        <RouterProvider router={_ROUTER} />
      </TaskInfoProvider.Provider>
    </Fragment>
  )
}

export default App
