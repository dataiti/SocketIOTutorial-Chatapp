import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null,
    userId: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userId = action.payload.user._id;
    },
  },
  extraReducers: (builder) => {},
});

export const selectCurrentUser = (state) => state.auth.user;

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
