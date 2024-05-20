import { createSlice } from "@reduxjs/toolkit";

const kidsInputSlice = createSlice({
    name:'kidsInput',
    initialState:{
        kidsInputArrayItems:[]
    },
    reducers:{
        setKidsInputArrayItems: function(state,action){
            state.kidsInputArrayItems = action.payload
        }
    }
  })

  export const {setKidsInputArrayItems} = kidsInputSlice.actions

  export default kidsInputSlice.reducer