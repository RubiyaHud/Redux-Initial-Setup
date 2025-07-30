import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  //initial value of the state variable in reducer function
  initialState: {
    //name 'value' and it's initial-value '0' both can be changed
    value: 0, //or, null
  },

// Reducer functions (i.e. increment) are defined here, 
  reducers: {

    //state is a current value, or the initial value, 
    //action contains parameters from outside, or data are passed through 'action'
    increment: (state, action) => {
    //   console.log('state value : ' + state.value)
    //   console.log('action value :' + action.payload)

      state.value += action.payload
    },

    decrement: (state, action) => {
      console.log('decrement state value : ' + state.value)
      console.log('decrement action value :' + action.payload)

      state.value -= action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer

