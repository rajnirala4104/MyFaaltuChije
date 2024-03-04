
import { createBrowserRouter } from 'react-router-dom'
import { Cart, Home, Root } from '../pages'

export const _ROUTER = createBrowserRouter([{
    path: '/',
    element: <Root />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/cart',
            element: <Cart />
        }
    ]
}])