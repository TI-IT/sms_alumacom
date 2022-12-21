import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchProductsStatus', async params => {
  // const { order, sortBy, category, search, currentPage } = params
  const { data } = await axios.get(
    `https://script.google.com/macros/s/AKfycbzpzwWIeC6VXM6raZBB8YL08kRZpM2goz3UpKb_x4GLBnhygNroVbDKrQxb0A0feEb8/exec?table_products=all`
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
      state.items = action.payload.products
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
