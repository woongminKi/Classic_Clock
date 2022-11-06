import { configureStore } from "@reduxjs/toolkit";
import clock from "../feature/clockSlice";

const store = configureStore({
  reducer: {
    clock
  }
});

export default store;
