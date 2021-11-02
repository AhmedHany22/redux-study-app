import store from "./store/store";
import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from "./store/bugs";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

store.dispatch(ADD_BUG({ description: "Bug 1" }));
store.dispatch(ADD_BUG({ description: "Bug 2" }));
store.dispatch(REMOVE_BUG({ id: 1 }));
store.dispatch(RESOLVE_BUG({ id: 2 }));
unsubscribe();
