import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(newItem.id) ;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        })}
        else {
            existingItem.quantity = existingItem.quantity+1;
            existingItem.TotalPrice = existingItem.TotalPrice+newItem.price;
        }
      }
    ,
    removeItem(state, action) {
        const id= action.payload;
        const existingItem = state.items.find(item => item.id===id);
        if (existingItem.quantity ===1) {
            state.items = state.items.filter(item=> item.id !== id);
        } else {
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice- existingItem.price;
        }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;