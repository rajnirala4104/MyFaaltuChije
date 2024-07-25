import { Fragment, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { _ROUTER } from './routers'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import { MessageBoxContext } from './contexts'

function App() {

  const [showMessageBox, setShowMessageBox] = useState<boolean>(false)

  return (
    <Fragment>
      <Theme appearance='dark'>
        <MessageBoxContext.Provider value={{ showMessageBox, setShowMessageBox }}>
          <RouterProvider router={_ROUTER} />
        </MessageBoxContext.Provider>
      </Theme>
    </Fragment>

  )
}

export default App
