import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // --------------------
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        resolved: false,
        description: action.payload.description,
      });
    },
    //--------------------
    bugRemoved: (state, action) => {
      return state.filter((bug) => bug.id !== action.payload.id);
    },
    //--------------------
    bugRsolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
  },
});

export const { bugAdded, bugRemoved, bugRsolved } = slice.actions;
export default slice.reducer;

export const selectUnresolved = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

// -------------------- Reducer Using If --------------------
// function reducer(state, action) {
//   if (action.type === "bugAdded") {
//     return [
//       ...state,
//       { id: ++lastId, resolved: false, description: action.description },
//     ];
//   }
//   if (action.type === "bugRemoved") {
//     return state.filter((bug) => bug.id !== action.id);
//   }
//   if (action.type === "bugRsolved") {
//     return state.map((bug) =>
//       bug.id === action.id ? { ...bug, resolved: true } : bug
//     );
//   }
//   return state;
// }
// function reducer(state = [], action) {
//   switch (action.type) {
//     case ADD_BUG.type:
//       return [
//         ...state,
//         { id: ++lastId, resolved: false, description: action.description },
//       ];
//     case REMOVE_BUG.type:
//       return state.filter((bug) => bug.id !== action.id);
//     case RESOLVE_BUG.type:
//       return state.map((bug) =>
//         bug.id === action.id ? { ...bug, resolved: true } : bug
//       );
//     default:
//       return state;
//   }
// }
// -------------------- Actions Creators --------------------
// export const ADD_BUG = createAction("bugAdded");
// export const REMOVE_BUG = createAction("bugRemoved");
// export const RESOLVE_BUG = createAction("bugRsolved");

// -------------------- Reducer --------------------
// let lastId = 0;

// export default createReducer([], {
//   //--------------------
//   bugAdded: (state, action) => {
//     state.push({
//       id: ++lastId,
//       resolved: false,
//       description: action.payload.description,
//     });
//   },
//   //--------------------
//   bugRemoved: (state, action) => {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   },
//   //--------------------
//   bugRsolved: (state, action) => {
//     const index = state.findIndex((bug) => bug.id === action.payload.id);
//     state[index].resolved = true;
//   },
// });
