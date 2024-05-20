

import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
    name:'pizzalist',
    initialState:{
        pizzaArrayItems:[]
    },
    reducers:{
        setPizzaArrayItems: function(state,action){
            state.pizzaArrayItems = action.payload
        }
    }
  })

  export const {setPizzaArrayItems} = pizzaSlice.actions

  export default pizzaSlice.reducer