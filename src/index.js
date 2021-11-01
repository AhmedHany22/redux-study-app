import store from "./store";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

store.dispatch({ type: "bugAdded", description: "Bug 1" });
store.dispatch({ type: "bugAdded", description: "Bug 2" });
unsubscribe();
store.dispatch({ type: "bugRemoved", id: 1 });
