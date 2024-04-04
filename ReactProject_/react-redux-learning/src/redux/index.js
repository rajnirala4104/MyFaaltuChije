import { configureStore } from '@reduxjs/toolkit'
import cartState from './states/cart.state'

export default configureStore({
    reducer: {
        cart: cartState.reducer,
    }
})