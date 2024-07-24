import { Fragment } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { _ROUTER } from './routers'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';

function App() {
  return (
    <Fragment>
      <Theme appearance='dark'>
        <RouterProvider router={_ROUTER} />
      </Theme>
    </Fragment>

  )
}

export default App
