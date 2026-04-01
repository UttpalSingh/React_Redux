import { createSlice } from "@reduxjs/toolkit";

initialState = {
    // value,emptyvalue,object,methods
    value:0
}

export const CounterSlice = createSlice({
    name:counter,
    initialState,
    reducers:{
        // functions
        increment:(state,action) =>{
            state.value += 1
        },
        decrement:(state,action) =>{
            state.value -= 1
        }
    }
})

export const {increment,decrement} = CounterSlice.actions
export default CounterSlice.reducer