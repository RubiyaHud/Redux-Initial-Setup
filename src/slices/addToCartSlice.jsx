import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',

  initialState: {
    //we need to take an empty array for addToCart products
    value: [],
  },

  reducers: {
    addToCart: (state, action) => {
      // console.log( state.value)
      // console.log(action.payload)

      // Check by using the "product id" that => Does the product is already in the Cart?
      // state.value contains all products in the cart
      // action.payload contains the only one product that is just dispatched for 'addToCart'

      let cart = state.value.find(item => item.id == action.payload.id)
      console.log(cart)

      if(cart){
        cart.quantity += 1
      }else{
        // We can Add a new property "size" and set it a value, then Push this new object into the state.value array
        // state.value.push({...action.payload, size:18})  
        state.value.push({...action.payload})
      }

    },
  },
});

export const { addToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;

