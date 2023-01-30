import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { BASE_URL } from '../../../Config/api'
import {toast} from "react-toastify"
const initialState = {
    loading: false,
    token: "",
    status: ""
}


export const registerUser = createAsyncThunk('registerUser', async(body) =>{
    const res = await fetch(`${BASE_URL}/Auth/register`, {
        method: "post",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(status => status.json())
    
    .catch(error =>{
        toast.error(`Failed: ${error.message}`)
    })
    
    return  res
})

export const loginUser = createAsyncThunk('loginUser', async(body) =>{
    const res = await fetch(`${BASE_URL}/Auth/login`, {
        method: "post",
        headers: {
            'Content-type': 'application/json',
             Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(body)
    }).then(res => 
        res.json()
    ).catch(error =>{
        toast.error(`Failed: ${error.message}`)
    })
   
    return res
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => async(body) =>{
            const res = await fetch(`${BASE_URL}/Auth/login`, {
                method: "post",
                headers: {
                    'Content-type': 'application/json',
                     Authorization: localStorage.getItem("token")
                },
                body: JSON.stringify(body)
            }).then(res => 
                res.json()
            ).catch(error =>{
                toast.error(`Failed: ${error.message}`)
            })
            if(res.status === 200){
                state.token = res.token
                toast.success("Registered successfully", {position : "top-right"})   
            }
           
        }
        // addToken: (state,action) =>{
        //     state.token = localStorage.getItem("token")
        // },
      
        // logout: (state,action) =>{
        //     state.token = null
        //     localStorage.clear()
        // }
    },
 
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer;

