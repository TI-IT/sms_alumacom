import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import pizza from './slices/pizzaSlice'
import products from './slices/productSlice'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
    products
  }
})
