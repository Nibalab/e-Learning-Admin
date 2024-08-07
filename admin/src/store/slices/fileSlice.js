// src/store/slices/fileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
  name: 'files',
  initialState: [],
  reducers: {
    uploadFile: (state, action) => {
      state.push(action.payload);
    },
    setFiles: (state, action) => {
      return action.payload;
    },
    removeFile: (state, action) => {
      return state.filter(file => file.id !== action.payload);
    },
  },
});

export const { uploadFile, setFiles, removeFile } = fileSlice.actions;
export default fileSlice.reducer;
