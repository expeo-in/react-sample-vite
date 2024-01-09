import { configureStore } from "@reduxjs/toolkit";
import counterReduxReducer from "./counterSlice";

const reduxStore = configureStore({
  reducer: {
    counter: counterReduxReducer,
  },
});

export default reduxStore;
