import actions from "./actionTypes";

export function addBug(description) {
  return { type: actions.BUG_ADDED, description };
}
export function removeBug(id) {
  return { type: actions.BUG_REMOVED, id };
}
