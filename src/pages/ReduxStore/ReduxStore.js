import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../OrderList/PizzaList/PizzaSlice"


export const myStore = configureStore({
    reducer: {
        pizzaReducer
    }
})