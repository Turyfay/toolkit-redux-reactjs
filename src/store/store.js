import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})


