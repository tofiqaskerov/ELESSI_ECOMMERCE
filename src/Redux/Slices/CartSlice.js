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
            const numDetail = action.payload.numDetail
            if(itemIndex >= 0){
                numDetail !== undefined ? state.cartItems[itemIndex].cartQuantity += numDetail : state.cartItems[itemIndex].cartQuantity +=1
            }else{
                const tempProduct = {
                    ...action.payload,
                    cartQuantity:  numDetail === undefined ? 1 :  0 + numDetail 
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
            }
                else if(state.cartItems[itemIndex].cartQuantity === 1){
                    const nextCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
                    state.cartItems = nextCartItems;
                }

            else if(state.cartItems[itemIndex].cartQuantity === null){
                state.cartItems = state.cartItems[itemIndex].cartQuantity = 0
            }
            state.cartTotalQuantity--
            localStorage.setItem("cartTotalQuantity", JSON.stringify(state.cartTotalQuantity))
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart(state, action){
            const id = action.payload.id
            const selectedProduct = state.cartItems.filter(item => item.id === id ) 

            selectedProduct 
            ? state.cartItems = state.cartItems.filter(item => item.id !== id)
            : state.cartTotalQuantity = state.cartTotalQuantity - selectedProduct.cartQuantity

            state.cartTotalQuantity--

            localStorage.setItem("cartTotalQuantity", JSON.stringify(state.cartTotalQuantity))
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        totalPrice(state){
            let { total, quantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
              const { price, cartQuantity } = cartItem;
              const itemTotal = price * cartQuantity;
    
              cartTotal.total += itemTotal;
              cartTotal.quantity += cartQuantity;
    
              return cartTotal;
            },
            {
              total: 0,
              quantity: 0,
            }
        );
         total = parseFloat(total.toFixed(2));
         state.cartTotalQuantity = quantity;
         state.cartTotalAmount = total;           
        }
    }
})
export const {addToCart,decreaseCart,removeFromCart,removeFromDetail,clearCart, totalPrice} = cartSlice.actions
export default cartSlice.reducer
