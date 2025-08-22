import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // all user orders
  lastOrder: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrder: (state, action) => {
      state.orders.unshift(action.payload); // newest first
      state.lastOrder = action.payload;
    },
    clearOrders: (state) => {
      state.orders = [];
      state.lastOrder = null;
    },
    setLastOrder: (state, action) => {
      state.lastOrder = action.payload;
    },
  },
});

export const { setOrders, addOrder, clearOrders, setLastOrder } = orderSlice.actions;
export default orderSlice.reducer;
