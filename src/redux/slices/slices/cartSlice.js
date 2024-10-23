import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItemCart: (state, action) => {
            state.push(action.payload)
        },
        removeCart: (state, action) => {
            return state.filter((item) => item.id != action.payload)
        },
        emptycart :(state)=>{
            return state =[]
        }
    }
})
export const { addItemCart, removeCart, emptycart } = cartSlice.actions
export default cartSlice.reducer