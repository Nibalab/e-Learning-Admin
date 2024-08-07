// src/store/slices/classSlice.js
import { createSlice } from '@reduxjs/toolkit';

const classSlice = createSlice({
  name: 'classes',
  initialState: [],
  reducers: {
    addClass: (state, action) => {
      state.push(action.payload);
    },
    setClasses: (state, action) => {
      return action.payload;
    },
  },
});

export const { addClass, setClasses } = classSlice.actions;
export default classSlice.reducer;
