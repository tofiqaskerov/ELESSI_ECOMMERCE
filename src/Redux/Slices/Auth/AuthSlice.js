import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { BASE_URL } from '../../../Config/api'
const initialState = {
    token: null,
    user:  localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [] ,
 
}


export const registerUser = createAsyncThunk('registerUser', async(body) =>{
    try{
        const res = await fetch(`${BASE_URL}/Auth/register`, {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
          })
          const data =  await res.json()
        
         return  data
    }catch (error){
        alert(error) 
    }
    
})


export const loginUser = createAsyncThunk('loginUser', async(body) =>{
    try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: "post",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data  = await res.json()
    
        return data

        
    } catch (error) {
        alert(error) 
    }

})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", state.token)  
          },
        addUser: (state, action) => {
          state.user.push(action.payload);
          localStorage.setItem("user",  JSON.stringify(state.user))

        },
        logout: (state, action) =>{
            state.user.shift()
            state.token = []
            localStorage.setItem("user", state.user)
            localStorage.setItem("token", state.token)
        } 
    },
   
 
 
})

export const {setToken, addUser, logout} = authSlice.actions
export default authSlice.reducer;

