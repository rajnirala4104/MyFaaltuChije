import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { _ROUTER } from './router'

function App() {
  return (
    <Fragment>
      <RouterProvider router={_ROUTER} />
    </Fragment>
  )
}

export default App
