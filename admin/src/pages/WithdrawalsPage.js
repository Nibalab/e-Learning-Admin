// src/pages/WithdrawalsPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveWithdrawal, rejectWithdrawal } from '../store/slices/withdrawalSlice';

const WithdrawalsPage = () => {
  const dispatch = useDispatch();
  const withdrawals = useSelector(state => state.withdrawals);

  const handleApprove = (id) => {
    dispatch(approveWithdrawal(id));
  };

  const handleReject = (id) => {
    dispatch(rejectWithdrawal(id));
  };

  return (
    <div>
      <h1>Withdrawals</h1>
      <ul>
        {withdrawals.map(withdrawal => (
          <li key={withdrawal.id}>
            <strong>Class:</strong> {withdrawal.className} - <strong>Student:</strong> {withdrawal.studentName} - <strong>Status:</strong> {withdrawal.status}
            <button onClick={() => handleApprove(withdrawal.id)}>Approve</button>
            <button onClick={() => handleReject(withdrawal.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WithdrawalsPage;
