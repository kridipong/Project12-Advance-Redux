import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: { isLoggedIn: true, notification: null },
  reducers: {
    toggleShow(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const statusActions = statusSlice.actions;
export default statusSlice;
