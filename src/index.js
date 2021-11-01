import store from "./store/store";
import { addBug, removeBug, resolveBug } from "./store/bugs";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

store.dispatch(addBug("Bug 1"));
store.dispatch(addBug("Bug 2"));
store.dispatch(removeBug(1));
store.dispatch(resolveBug(2));
unsubscribe();
