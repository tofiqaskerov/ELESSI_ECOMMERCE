import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity : localStorage.getItem("cartTotalQuantity") ? JSON.parse(localStorage.getItem("cartTotalQuantity")) : 0,
    cartTotalAmount : 0
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(i => i.id === action.payload.id);
            if(itemIndex >= 0){
               state.cartItems[itemIndex].cartQuantity++
            }else{
                const tempProduct = {
                    ...action.payload,
                    cartQuantity: 1 
                }
                state.cartItems.push(tempProduct)
            }
            state.cartTotalQuantity++
            localStorage.setItem("cartTotalQuantity", JSON.stringify(state.cartTotalQuantity))
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            state.cartItems = nextCartItems
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
        },
        decreaseCart(state, action){
            const itemIndex =  state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -=1
              
            }else if(state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
                state.cartItems = nextCartItems;
            }
            state.cartTotalQuantity--
            localStorage.setItem("cartTotalQuantity", JSON.stringify(state.cartTotalQuantity))
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        totalPrice(state){
            let {total, quantity} = state.cartItems.reduce((totalCart, cartItem) =>{
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;
                totalCart.total +=itemTotal
                totalCart.quantity += cartQuantity

                return totalCart
            },
            {
                total:0,
                quantity:0
            } );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total            
        }
    }
})
export const {addToCart,decreaseCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer
