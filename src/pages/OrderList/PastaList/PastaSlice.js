

import { createSlice } from "@reduxjs/toolkit";

const pastaSlice = createSlice({
    name:'pastalist',
    initialState:{
        pastaArrayItems:[]
    },
    reducers:{
        setPastaArrayItems: function(state,action){
            state.pastaArrayItems = action.payload
        }
    }
  })

  export const {setPastaArrayItems} = pastaSlice.actions

  export default pastaSlice.reducer