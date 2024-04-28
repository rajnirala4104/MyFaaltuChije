import { createSlice } from "@reduxjs/toolkit";

const cartState = createSlice({
    name: "cart",
    initialState: [], // for set a initial value of the state

    //operations that we'll  perfom on this state
    reducers: {
        addProductInCart(state, action) {
            state.push(action.payload)
        },
        removeProduct(state, action) {
            console.log(action.payload)
        }
    }
})

export default cartState;
export const { addProductInCart, removeProduct } = cartState.actions;