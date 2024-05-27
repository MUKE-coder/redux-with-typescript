// src/store/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartState {
  cartItems: CartItem[];
}

// Safely retrieve cart items from localStorage
const getInitialCartItems = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch (error) {
    console.error("Failed to parse cart items from localStorage", error);
  }
  return [];
};

const initialState: CartState = {
  cartItems: getInitialCartItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
