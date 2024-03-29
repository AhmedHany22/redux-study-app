import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegain } from "./apiActions";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: { list: [], loader: false, lastFetch: null },
  reducers: {
    bugsRequested: (state, action) => {
      state.loader = true;
    },
    bugsRecived: (state, action) => {
      state.list = action.payload;
      state.loader = false;
      state.lastFetch = Date.now();
    },
    bugsRequestFailed: (state, action) => {
      state.loader = false;
    },
    bugAdded: (state, action) => {
      state.list.push({
        id: ++lastId,
        resolved: false,
        description: action.payload.description,
      });
    },
    bugRemoved: (state, action) => {
      return state.list.filter((bug) => bug.id !== action.payload.id);
    },
    bugRsolved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);
      state.list[index].resolved = true;
    },
    bugAssignedToUser: (state, action) => {
      const { id: bugId, userId } = action.payload;
      const index = state.list.findIndex((bug) => bug.id === bugId);
      state.list[index].userId = userId;
    },
  },
});

export default slice.reducer;
export const {
  bugsRequested,
  bugsRecived,
  bugAdded,
  bugRemoved,
  bugRsolved,
  bugAssignedToUser,
  bugsRequestFailed,
} = slice.actions;

export const loadBug = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;
  const diffInSec = moment().diff(moment(lastFetch), "seconds");
  if (diffInSec < 10) return;
  dispatch(
    apiCallBegain({
      url: "/bugs",
      onStart: bugsRequested.type,
      onSuccess: bugsRecived.type,
      onFailure: bugsRequestFailed.type,
    })
  );
};

export const addBug = (bug) =>
  apiCallBegain({
    url: "/bugs",
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });
export const resolveBug = (id) =>
  apiCallBegain({
    url: `/bugs/${id}`,
    method: "patch",
    data: { resolved: true },
    onSuccess: bugRsolved.type,
  });
export const assignBug = (bugId, userId) =>
  apiCallBegain({
    url: `/bugs/${bugId}`,
    method: "patch",
    data: { userId },
    onSuccess: bugAssignedToUser.type,
  });

export const selectUnresolved = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const selectByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
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
