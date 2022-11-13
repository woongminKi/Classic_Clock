import { createSlice } from "@reduxjs/toolkit";

const clockSlice = createSlice({
  name: "clock",
  initialState: {
    now: new Date(),
  },
  reducers:{
    setNow: (state, action) => {
      state.now = action.payload;
    },
  },
});

export const { setNow } = clockSlice.actions;
export default clockSlice.reducer;
