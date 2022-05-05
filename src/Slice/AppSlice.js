import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./AppThunk";


//user,status,extraReducers are for Component D only

const initialState={
    users: [],
    status:null,
    value:0
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
          },
    },
    extraReducers:{
        [getUsers.pending]:(state,action)=>{
            state.status="loading"
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = "success";
            state.users = action.payload;
          },
          [getUsers.rejected]: (state, action) => {
            state.status = "failed";
          },
    }
})


export const {increment,decrement,incrementByAmount}=counterSlice.actions;
export default counterSlice.reducer