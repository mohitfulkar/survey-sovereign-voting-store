import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../../service/authService";
import { handleAsyncAction } from "../../utils/extraReducer.js";

const initialState = {
  user: null, // For storing user info after login or registration
  token: null, // For storing the JWT token after successful login
  loading: false,
  error: null,
  success: false,
};

// Async Thunks for Register and Login
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authService.registerUser(userData);
      return data; // On success, return the response
    } catch (error) {
      return rejectWithValue(error.message); // On error, return the error message
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await authService.loginUser(payload);
      console.log("data", data);
      return data; // On success, return the response
    } catch (error) {
      return rejectWithValue(error.message); // On error, return the error message
    }
  }
);

// Define the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Handling async actions using the custom helper function
    handleAsyncAction(builder, register, "auth"); // Use "auth" instead of "pollItems"
    handleAsyncAction(builder, login, "auth",'token'); // Use "auth" instead of "pollItem"
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
