import { createSlice } from "@reduxjs/toolkit";

const adultInputSlice = createSlice({
    name:'adultInput',
    initialState:{
        adultInputArrayItems:[]
    },
    reducers:{
        setAdultInputArrayItems: function(state,action){
            state.adultInputArrayItems = action.payload
        }
    }
  })

  export const {setAdultInputArrayItems} = adultInputSlice.actions

  export default adultInputSlice.reducer