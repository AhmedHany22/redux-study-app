import actions from "./actionTypes";
let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        { id: ++lastId, resolved: false, description: action.description },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.id);
    default:
      return state;
  }
}

export default reducer;

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
//   return state;
// }
