import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./redux/reducers/productReducer"
import cartReducer from "./redux/reducers/cartReducer"

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer
  },
})