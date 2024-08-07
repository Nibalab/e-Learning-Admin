import { createSlice } from '@reduxjs/toolkit';

const enrollmentSlice = createSlice({
  name: 'enrollments',
  initialState: [],
  reducers: {
    addEnrollment: (state, action) => {
      state.push(action.payload);
    },
    setEnrollments: (state, action) => {
      return action.payload;
    },
    removeEnrollment: (state, action) => {
      return state.filter(enrollment => enrollment.id !== action.payload);
    },
  },
});

export const { addEnrollment, setEnrollments, removeEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
