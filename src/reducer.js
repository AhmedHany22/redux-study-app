let lastId = 0;

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

function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        { id: ++lastId, resolved: false, description: action.description },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.id);
    default:
      return state;
  }
}

export default reducer;
