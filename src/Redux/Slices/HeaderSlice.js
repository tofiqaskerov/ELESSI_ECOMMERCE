import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchOpen: false,
    sidebarOpen: false,
    cartOpen: false
}

const headerSlice = createSlice({
    name: 'header',
    initialState : initialState,
    reducers:{
        openSearchModal : (state) =>{
            state.searchOpen = true
        },
        closeSearchModal : (state) =>{
            state.searchOpen = false
        },
        openSidebar : (state) =>{
            state.sidebarOpen = true
        },
        closeSidebar : (state) =>{
            state.sidebarOpen = false
        }, 
        openCart : (state) =>{
            state.cartOpen = true
        },
        closeCart : (state) =>{
            state.cartOpen = false
        }
    }
})


export const {openSearchModal, closeSearchModal, openSidebar, closeSidebar, openCart, closeCart } = headerSlice.actions
export default headerSlice.reducer