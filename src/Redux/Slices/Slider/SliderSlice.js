import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Config/api";
const initialState = {
    sliders:[],
    status: 'idle',
    error: null
}
export const fetchSliders = createAsyncThunk(
    'slider/getAll',
    async function(){
       
       return await fetch(`${BASE_URL}/slider/getAll`)
       .then(res => res.json()).then(data => data.data)
    }
)


const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    extraReducers:{
        [fetchSliders.pending]: (state,action) =>{
            state.status = "Loading"   
        },
        [fetchSliders.fulfilled]: (state, {payload}) =>{
            state.sliders = payload
            state.status = "completed"

        },
        [fetchSliders.rejected] : (state, action) =>{
            state.status = "Failed "
        }
    }
})
export default sliderSlice.reducer