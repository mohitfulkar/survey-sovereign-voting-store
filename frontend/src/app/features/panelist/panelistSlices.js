import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleAsyncAction } from "../../utils/extraReducer";
import axios from "axios";
import { baseUrl } from "../../../constants/env";

const initialState = {
  panelists: [],
  panelist: null,
  loading: false,
  success: false,
  error: null,
};

export const getPanelists = createAsyncThunk(
  "panelists/getPanelists",
  async () => {
    const response = await axios.get(`${baseUrl}/panelists`);
    return response.data;
  }
);

export const getPanelistsById = createAsyncThunk(
  "panelists/getPanelistsById",
  async (id) => {
    const response = await axios.get(`${baseUrl}/panelist/${id}`);
    return response.data;
  }
);

const panelistSlice = createSlice({
  name: "panelist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncAction(builder, getPanelists, "panelists");
    handleAsyncAction(builder, getPanelistsById, "panelist");
  },
});

export default panelistSlice.reducer;
