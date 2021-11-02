import store from "./store/store";
import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from "./store/bugs";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

store.dispatch(ADD_BUG("Bug 1"));
store.dispatch(ADD_BUG("Bug 2"));
store.dispatch(REMOVE_BUG(1));
store.dispatch(RESOLVE_BUG(2));
unsubscribe();
