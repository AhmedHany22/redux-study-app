import axios from "axios";
import { apiCallBegain, apiCallFailed, apiCallSuccess } from "../apiActions";

const api = (store) => (next) => async (action) => {
  if (action.type !== apiCallBegain.type) return next(action);

  const { url, method, data, onStart, onSuccess, onFailure } = action.payload;
  store.dispatch({ type: onStart });
  next(action);
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9002/api",
      url,
      method,
      data,
    });
    store.dispatch(apiCallSuccess(response.data));
    if (onSuccess) store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    store.dispatch(apiCallFailed(error.message));
    if (onFailure) store.dispatch({ type: onFailure, payload: error.message });
  }
};

export default api;
