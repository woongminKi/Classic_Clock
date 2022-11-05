import { createSlice } from "@reduxjs/toolkit";

const now = new Date();

const clockSlice = createSlice({
  name: "clock",
  initialState: {
    clock: {
      hours: "",
      minutes: "",
      seconds: "",
    }
  },
  reducers:{
    getHours: (state, action) => {
      state.hours = action.payload;
    },
    getMinutes: (state, action) => {
      state.minutes = action.payload;
    },
    getSeconds: (state, action) => {
      state.seconds = action.payload;
    },
  },
});

export const { getHours, getMinutes, getSeconds } = clockSlice.actions;
export default clockSlice.reducer;
