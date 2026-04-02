import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // value,emptyvalue,object,methods
    value:10
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        // functions
        increment:(state,action) =>{
            state.value += 1
        },
        decrement:(state,action) =>{
            state.value -= action.payload
        },
        incrementbyAmount:(state,action)=>{
            state.value += action.payload
        }
    }
})

export const {increment,decrement,incrementbyAmount} = CounterSlice.actions
export default CounterSlice.reducer