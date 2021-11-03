import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      state.push({ id: ++lastId, name: action.payload.name });
    },
    userRemoved: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { userAdded, userRemoved } = slice.actions;
export default slice.reducer;
