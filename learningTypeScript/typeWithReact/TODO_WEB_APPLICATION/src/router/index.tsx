import { createBrowserRouter } from 'react-router-dom'
import { Home, Root } from '../page'

export const _ROUTER = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      path: '/',
      element: <Home />
    },
  ]
}])