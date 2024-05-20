import { createSlice } from "@reduxjs/toolkit";

const cookieSlice = createSlice({
    name:'cookielist',
    initialState:{
        cookieArrayItems:[]
    },
    reducers:{
        setCookieArrayItems: function(state,action){
            state.cookieArrayItems = action.payload
        }
    }
  })

  export const {setCookieArrayItems} = cookieSlice.actions

  export default cookieSlice.reducer