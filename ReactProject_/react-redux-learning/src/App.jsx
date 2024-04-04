import { Fragment } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import appStore from './redux'

import { RouterProvider } from 'react-router-dom'
import { _ROUTER } from './routes'


function App() {

  return (
    <Fragment>
      <Provider store={appStore}>
        <RouterProvider router={_ROUTER} />
      </Provider>
    </Fragment>
  )
}

export default App
