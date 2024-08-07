// src/store/slices/withdrawalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const withdrawalSlice = createSlice({
  name: 'withdrawals',
  initialState: [],
  reducers: {
    requestWithdrawal: (state, action) => {
      state.push(action.payload);
    },
    setWithdrawals: (state, action) => {
      return action.payload;
    },
    approveWithdrawal: (state, action) => {
      const index = state.findIndex(withdrawal => withdrawal.id === action.payload);
      if (index !== -1) {
        state[index].status = 'approved';
      }
    },
    rejectWithdrawal: (state, action) => {
      const index = state.findIndex(withdrawal => withdrawal.id === action.payload);
      if (index !== -1) {
        state[index].status = 'rejected';
      }
    },
  },
});

export const { requestWithdrawal, setWithdrawals, approveWithdrawal, rejectWithdrawal } = withdrawalSlice.actions;
export default withdrawalSlice.reducer;
