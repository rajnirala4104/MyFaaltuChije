import './App.css'
import { RouterProvider } from 'react-router-dom'
import { _ROUTER } from './routes'

function App() {
  return (
    <RouterProvider router={_ROUTER} />
  )
}

export default App
