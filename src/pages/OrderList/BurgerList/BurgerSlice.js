import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
    name:'burgerlist',
    initialState:{
        burgerArrayItems:[]
    },
    reducers:{
        setBurgerArrayItems: function(state,action){
            state.burgerArrayItems = action.payload
        }
    }
  })

  export const {setBurgerArrayItems} = burgerSlice.actions

  export default burgerSlice.reducer