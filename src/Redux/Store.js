import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'

const Store=configureStore({
    reducer:{students:userSlice}
})

export default Store