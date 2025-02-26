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
      return await commanService.delete("delete-poll", id);
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
export const updateStatus = createAsyncThunk(
  "poll/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      return await commanService.update("poll/status", id, { status });
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
let constant = [
  { method: getPollItems, variable: "pollItems" },
  { method: getPollById, variable: "pollItem" },
  { method: createPoll, variable: "pollItem" },
  { method: updateStatus, variable: "pollItem" },
];
const pollSlice = createSlice({
  name: "poll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    constant.forEach((item) => {
      handleAsyncAction(builder, item.method, item.variable);
    });
  },
});

export default pollSlice.reducer;
