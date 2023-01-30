import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    BASE_URL
} from '../../../Config/api'


const initialState = {
    users: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")) :  [],
    loading: false,
}



export const getByEmail = createAsyncThunk("getByEmail", async () => {

    let token = JSON.parse(localStorage.getItem("token"))
    
    let user= await  fetch(`${BASE_URL}/user/getByEmail`,{
        method:"GET",
        headers:{
            "Authorization": `Bearer ${token}`
        }
      
        
    }).then(res =>res.json())
    return  user
})


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            // state.users = []
            // localStorage.setItem("user", JSON.stringify(state.users))

        },
       
    },
    extraReducers:{
        [getByEmail.pending] : (state) =>{
            state.loading = false
        },
        [getByEmail.fulfilled] : (state, action) =>{
            state.loading = false
            state.users.push(action.payload.data)
            
           localStorage.setItem('user', JSON.stringify(state.users))
  
        },
        [getByEmail.rejected]: (state,action) => {
            state.loading = false
        }
    }

})


export const {
    logout,
    getUser
} = userSlice.actions

export default userSlice.reducer;