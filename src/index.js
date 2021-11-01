import store from "./store";
import actions from "./actionTypes";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

store.dispatch({ type: actions.BUG_ADDED, description: "Bug 1" });
store.dispatch({ type: actions.BUG_ADDED, description: "Bug 2" });
unsubscribe();
store.dispatch({ type: actions.BUG_REMOVED, id: 1 });
