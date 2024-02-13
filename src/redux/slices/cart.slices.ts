import { CartItem } from "@/types/Cart.type";
import { createSlice, current } from "@reduxjs/toolkit";

type CartStore = {
  items: CartItem[];
};

const initialState: CartStore = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateProducts(state, action) {
      let index = current(state.items).findIndex(
        (product) => product.product.id === action.payload.product.id
      );

      if (index === -1) {
        state.items.push({
          productId: 0,
          quantity: 1,
          product: action.payload,
          cartId: 0,
          cratedAt: "",
          id: 0,
          updateAt: "",
        });
      } else {
        state.items[index].quantity += action.payload.quantity;
      }
    },
    removeProduct(state, action) {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(
        (product) => product.product.id !== productIdToRemove
      );
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { updateProducts, removeProduct, clearItems } = cartSlice.actions;
