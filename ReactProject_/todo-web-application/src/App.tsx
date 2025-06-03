import { Fragment } from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import _ROUTER from './routers'

function App() {

  return (
    <Fragment>
      <RouterProvider router={_ROUTER}/>      
    </Fragment>
  )
}

export default App
