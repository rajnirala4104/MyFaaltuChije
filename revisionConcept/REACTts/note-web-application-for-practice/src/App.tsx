import { Fragment } from 'react'
import './App.css'
import { _ROUTER } from './routers/index.route'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <Fragment>
     <RouterProvider router={_ROUTER} />  
    </Fragment>
  )
}

export default App
