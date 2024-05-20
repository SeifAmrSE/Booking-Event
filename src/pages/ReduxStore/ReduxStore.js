import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../OrderList/PizzaList/PizzaSlice"
import pastaReducer from "../OrderList/PastaList/PastaSlice"
import burgerReducer from "../OrderList/BurgerList/BurgerSlice"
import cookieReducer from '../OrderList/CookieList/CookieSlice'
import cupcakeReducer from '../OrderList/CupcakeList/CupcakeSlice'
import kidsInputReducer from "../OrderList/KidsInput/KidsInputSlice"
import adultInputReducer from "../OrderList/AdultInput/AdultInputSlice"


export const myStore = configureStore({
    reducer: {
        pizzaReducer,
        pastaReducer,
        burgerReducer,
        cookieReducer,
        cupcakeReducer,
        kidsInputReducer,
        adultInputReducer
    }
})