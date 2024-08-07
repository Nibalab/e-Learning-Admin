import { configureStore } from '@reduxjs/toolkit';
import classReducer from './slices/classSlice';
import enrollmentReducer from './slices/enrollmentSlice';
import fileReducer from './slices/fileSlice';
import withdrawalReducer from './slices/withdrawalSlice';
import authReducer from './slices/authSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    classes: classReducer,
    enrollments: enrollmentReducer,
    files: fileReducer,
    withdrawals: withdrawalReducer,
  },
});

export default store;
