import { IProduct } from "@/types/globalTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface ICartState {
    products: IProduct[];
    total: number
}

const initialState: ICartState = {
    products: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const productExist = state.products.find(product => product._id === action.payload._id)
            if(productExist){
                productExist.quantity! += 1;
            }
            else{
                state.products.push({...action.payload, quantity: 1});
            }
            state.total += action.payload.price;
        },
        removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
            const productExist = state.products.find(product => product._id === action.payload._id)
            if(productExist && productExist.quantity! > 1){
                productExist.quantity! -= 1;
            }
            else{
                state.products = state.products.filter(product => product._id !== action.payload._id)
            }
            state.total -= action.payload.price;
        },

        remove:  (state, action: PayloadAction<IProduct>) =>{
            state.products = state.products.filter(product => product._id !== action.payload._id)
            state.total -= action.payload.price * action.payload.quantity!;
        }
    }
})


export const { addToCart, removeOneFromCart, remove } = cartSlice.actions;
export default cartSlice.reducer;