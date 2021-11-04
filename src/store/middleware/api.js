import axios from "axios";

const api = (store) => (next) => async (action) => {
  if (action.type !== "apiCallBegain") return next(action);
  next(action);

  const { url, method, data, onSuccess, onFailure } = action.payload;
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });
    console.log(onSuccess);
    store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    store.dispatch({ type: onFailure, payload: error.message });
  }
};

export default api;
