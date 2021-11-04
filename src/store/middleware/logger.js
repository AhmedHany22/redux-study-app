const logger = (params) => (store) => (next) => (action) => {
  console.log(store);
  console.log("Logger :", params);
  next(action);
};
export default logger;
