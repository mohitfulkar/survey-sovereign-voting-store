import { configureStore } from "@reduxjs/toolkit";
import pollReducer from "./features/panelist/pollSlice.js";

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    poll: pollReducer,
  },
});
