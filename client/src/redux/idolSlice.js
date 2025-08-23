import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 Async thunk to fetch idols from backend
export const fetchIdols = createAsyncThunk(
  "idols/fetchIdols",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:5000/api/idols/all", {
        withCredentials: true,
      });
      return res.data?.data; // should return an array of idols/images
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || "Failed to fetch idols"
      );
    }
  }
);

const initialState = {
  idols: [], // all idols
  loading: false,
  error: null,
};

const idolSlice = createSlice({
  name: "idols",
  initialState,
  reducers: {
    resetIdols: (state) => {
      state.idols = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdols.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIdols.fulfilled, (state, action) => {
        state.loading = false;
        state.idols = action.payload;
      })
      .addCase(fetchIdols.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetIdols } = idolSlice.actions;
export default idolSlice.reducer;
