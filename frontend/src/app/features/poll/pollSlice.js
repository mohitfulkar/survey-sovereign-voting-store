import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleAsyncAction } from "../../utils/extraReducer";
const initialState = {
  pollItems: [],
  pollItem: null,
  loading: false,
  error: null,
};

export const getPollItems = createAsyncThunk("poll/getPollItems", async () => {
  const response = await axios.get("http://localhost:3000/polls"); // Example API
  return response.data;
});

export const getPollById = createAsyncThunk("poll/getPollById", async (id) => {
  const response = await axios.get(`http://localhost:3000/poll-detail/${id}`); // Fetch a single poll by ID
  return response.data;
});
const pollSlice = createSlice({
  name: "poll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncAction(builder, getPollItems, "pollItems");
    handleAsyncAction(builder, getPollById, "pollItem");
  },
});

export default pollSlice.reducer;
