import store from "./store";
import { addBug, removeBug } from "./actionsCreator";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

store.dispatch(addBug("Bug 1"));
store.dispatch(addBug("Bug 2"));
unsubscribe();
store.dispatch(removeBug(1));
