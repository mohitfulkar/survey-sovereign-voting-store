import { configureStore } from "@reduxjs/toolkit";
import pollReducer from "./features/poll/pollSlice.js";
import authReducer from "./features/auth/authSlice.js";

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    poll: pollReducer,
    auth: authReducer,
  },
});
