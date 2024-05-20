import { createSlice } from "@reduxjs/toolkit";

const cupcakeSlice = createSlice({
    name:'cupcakelist',
    initialState:{
        cupcakeArrayItems:[]
    },
    reducers:{
        setCupcakeArrayItems: function(state,action){
            state.cupcakeArrayItems = action.payload
        }
    }
  })

  export const {setCupcakeArrayItems} = cupcakeSlice.actions

  export default cupcakeSlice.reducer