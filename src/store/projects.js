import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({ id: ++lastId, name: action.payload.name });
    },
    projectRemoved: (state, action) => {
      return state.filter((project) => project.id !== action.payload.id);
    },
  },
});

export const { projectAdded, projectRemoved } = slice.actions;
export default slice.reducer;
