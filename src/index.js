import store from "./store/store";
import {
  bugAdded,
  bugRemoved,
  bugRsolved,
  selectUnresolved,
} from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugRsolved({ id: 2 }));

store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(projectAdded({ name: "project 2" }));
store.dispatch(projectRemoved({ id: 1 }));

const x = selectUnresolved(store.getState());
console.log(x);

unsubscribe();
