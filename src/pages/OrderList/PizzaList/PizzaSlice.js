

import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
    name:'pizzalist',
    initialState:{
        arrayItems:[]
    },
    reducers:{
        setArrayItems: function(state,action){
            state.arrayItems = action.payload
        }
    }
  })

  export const {setArrayItems} = pizzaSlice.actions

  export default pizzaSlice.reducer