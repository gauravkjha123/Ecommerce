import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalDiscount: 0,
  totalAmountWithDiscount: 0,
  totalItem: 0,
};

const stastics = (cart) => {
  let totalAmountWithDiscount = 0;
  let totalItem = 0;
  let totalAmount = 0;
  let totalDiscount = 0;
  cart?.map((product) => {
    totalItem += product.cartCount;
    totalAmountWithDiscount += product.cartCount * product.price;
    totalAmount += product.cartCount * product.price;
    if (product.discountPercentage) {
      let disount =
        product.cartCount *
        ((product.price * product.discountPercentage) / 100);
      totalDiscount += disount;
      totalAmountWithDiscount -= disount;
    }
  });
  return [totalAmountWithDiscount, totalAmount, totalItem, totalDiscount];
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let id = action.payload.id;
      let product = state.cart.filter((value) => value.id == id)[0];
      if (product) {
        product.cartCount++;
      } else {
        let product = { ...action.payload };
        product.cartCount = 1;
        state.cart.unshift(product);
      }
      const [totalAmountWithDiscount, totalAmount, totalItem, totalDiscount] =
        stastics(state.cart);
      state.totalAmountWithDiscount = totalAmountWithDiscount;
      state.totalItem = totalItem;
      state.totalAmount = totalAmount;
      state.totalDiscount = totalDiscount;
    },
    removeFromCart: (state, action) => {
      let product = state.cart.filter(
        (value) => value.id == action.payload.id
      )[0];
      if (product && product.cartCount == 1) {
        let index = state.cart.findIndex(
          (value) => value.id == action.payload.id
        );
        state.cart.splice(index, 1);
      } else {
        product.cartCount--;
      }
      const [totalAmountWithDiscount, totalAmount, totalItem, totalDiscount] =
        stastics(state.cart);
      state.totalAmountWithDiscount = totalAmountWithDiscount;
      state.totalItem = totalItem;
      state.totalAmount = totalAmount;
      state.totalDiscount = totalDiscount;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer;
export default cartSlice.reducer;
