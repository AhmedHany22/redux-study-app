import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
// import func from "./middleware/func";
import toast from "./middleware/toast";
import api from "./middleware/api";

export default configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware(), logger("console"), toast, api],
});
