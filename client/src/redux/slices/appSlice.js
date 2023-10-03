import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: 0,
  user: {},
  users: [],
  allUsers: [],
  friends: [],
  friednRequests: [],
  chatType: null,
  room_id: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state.tab = action.payload.tab;
    },
    updateUsers: (state, action) => {
      console.log(action.payload.data);
      state.users = action.payload.data;
    },
  },
});

export const { updateTab, updateUsers } = appSlice.actions;
export default appSlice.reducer;
