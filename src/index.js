import store from "./store/store";
import {
  addBug,
  loadBug,
  bugAdded,
  bugRemoved,
  bugRsolved,
  selectByUser,
  selectUnresolved,
  bugAssignedToUser,
} from "./store/bugs";
import { userAdded, userRemoved } from "./store/users";
import { projectAdded, projectRemoved } from "./store/projects";

const unsubscribe = store.subscribe(() =>
  console.log("State changed :", store.getState())
);

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(bugRsolved({ id: 2 }));

// store.dispatch(projectAdded({ name: "project 1" }));
// store.dispatch(projectAdded({ name: "project 2" }));
// store.dispatch(projectRemoved({ id: 1 }));

// store.dispatch(userAdded({ name: "Ahmed" }));
// store.dispatch(userAdded({ name: "Hany" }));
// store.dispatch(userRemoved({ id: 2 }));

// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 2 }));
// const x = selectUnresolved(store.getState());
// const y = selectByUser(1)(store.getState());
// console.log("Unresolved : ", x);
// console.log("Asigned to user : ", y);

// store.dispatch((dispatch, getState) => {
//   console.log(dispatch);
//   console.log("hi", getState());
// });
// store.dispatch({ type: "error", payload: { message: "An error occured" } });

store.dispatch(loadBug());
store.dispatch(addBug({ description: "my bug" }));
// setTimeout(() => store.dispatch(loadBug()), 11000);

unsubscribe();
