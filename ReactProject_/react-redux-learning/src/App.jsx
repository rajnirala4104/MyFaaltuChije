import './App.css'
import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import { CartContaxt } from './contaxts'
import { _ROUTER } from './routes'

function App() {

  const [cart, setCart] = useState([])

  return (
    <CartContaxt.Provider value={{ cart, setCart }}>
      <RouterProvider router={_ROUTER} />
    </CartContaxt.Provider>
  )
}

export default App
