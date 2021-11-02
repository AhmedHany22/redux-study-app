import { createAction } from "@reduxjs/toolkit";

// -------------------- Actions Creators --------------------
export const ADD_BUG = createAction("bugAdded");
export const REMOVE_BUG = createAction("bugRemoved");
export const RESOLVE_BUG = createAction("bugRsolved");

// -------------------- Reducer --------------------
let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BUG.type:
      return [
        ...state,
        { id: ++lastId, resolved: false, description: action.description },
      ];
    case REMOVE_BUG.type:
      return state.filter((bug) => bug.id !== action.id);
    case RESOLVE_BUG.type:
      return state.map((bug) =>
        bug.id === action.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
}

export default reducer;

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
