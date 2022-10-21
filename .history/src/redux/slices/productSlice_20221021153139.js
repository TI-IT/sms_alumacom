import axios from 'axios'
import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchProductsStatus', async params => {
  // const { order, sortBy, category, search, currentPage } = params
  const { data } = await axios.get(
    `https://script.google.com/macros/s/AKfycbzOeQm-y91oJPhcj_NbiZfOc3dlxouwo5jTyo3gVsUQtTUlSmbW-zT5C5HJqL7-ULZhaQ/exec?table_products=all`
  )
  return data
})

const initialState = {
  items: [],
  status: 'loading' // loading | success | error
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    }
  },
  extraReducers: {
    [fetchProducts.pending]: state => {
      state.status = 'loading'
      state.items = []
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'error'
      state.items = []
    }
  }
})

export const { setItems } = productSlice.actions

export default productSlice.reducer
