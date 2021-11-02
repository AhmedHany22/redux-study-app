import store from "./store/store";
import { bugAdded, bugRemoved, bugRsolved } from "./store/bugs";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugRsolved({ id: 2 }));
unsubscribe();
