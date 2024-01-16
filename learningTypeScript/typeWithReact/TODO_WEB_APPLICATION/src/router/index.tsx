import { createBrowserRouter } from 'react-router-dom'
import { Home, NotFoundPage, Root, TaskList } from '../page'

export const _ROUTER = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/list',
      element: <TaskList />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]
}])