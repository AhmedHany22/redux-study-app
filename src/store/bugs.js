// -------------------- Actions Types --------------------
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugRsolved";

// -------------------- Actions Creators --------------------
export function addBug(description) {
  return { type: BUG_ADDED, description };
}
export function removeBug(id) {
  return { type: BUG_REMOVED, id };
}
export const resolveBug = (id) => {
  return { type: BUG_RESOLVED, id };
};

// -------------------- Reducer --------------------
let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        { id: ++lastId, resolved: false, description: action.description },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.id);
    case BUG_RESOLVED:
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
