import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.products = [...action.payload];
    },
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
    updateProduct: (state, action) => {
      let product = state.products.filter(
        (value) => value.id === action.payload.id
      )[0];
      product.title = action.payload.title;
      product.description = action.payload.description;
      product.price = action.payload.price;
    },
    deleteProduct: (state, action) => {
      let index = state.products.findIndex(
        (value) => value.id === action.payload.id
      );
      state.products.splice(index, 1);
    },
  },
});

export const { fetchProducts, addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export const productSelector = (state) => state.productReducer;
export default productSlice.reducer;
