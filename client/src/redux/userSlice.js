import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk: fetch profile by user_id
export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/profile`, {withCredentials: true});
      return res.data; // backend should return { id, name, email, ... }
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error fetching profile");
    }
  }
);

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const initialState = {
  user: token && role ? { role: role, token } : role ? { role: role } : null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      if (action.payload?.token) {
        localStorage.setItem("token", action.payload.token);
      }
      if (action.payload?.id) {
        localStorage.setItem("role", action.payload.role);
      }
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        // merge profile into state.user
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
