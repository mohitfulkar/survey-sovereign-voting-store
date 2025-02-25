import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleAsyncAction } from "../../utils/extraReducer.js";
import { commanService } from "../../../service/commanService.js";
import { baseUrl } from "../../../constants/env.js";
const initialState = {
  pollItems: [],
  pollItem: null,
  loading: false,
  error: null,
  success: false,
};

export const getPollItems = createAsyncThunk(
  "poll/getPollItems",
  async (filters = {}) => {
    const response = await commanService.getAll("polls", filters); // Example API
    return response.data;
  }
);

export const getPollById = createAsyncThunk("poll/getPollById", async (id) => {
  const response = await axios.get(`${baseUrl}/poll-detail/${id}`); // Fetch a single poll by ID
  return response.data;
});
export const createPoll = createAsyncThunk(
  "poll/createPoll",
  async (pollData, { rejectWithValue }) => {
    try {
      console.log("pollData", pollData);
      return await commanService.create("create-poll", pollData);
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
export const deletePollById = createAsyncThunk(
  "poll/deletePollById",
  async (id, { rejectWithValue }) => {
    try {
      return await commanService.delete("delete-poll",id);
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
const pollSlice = createSlice({
  name: "poll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncAction(builder, getPollItems, "pollItems");
    handleAsyncAction(builder, getPollById, "pollItem");
    handleAsyncAction(builder, createPoll, "pollItem");
  },
});

export default pollSlice.reducer;
