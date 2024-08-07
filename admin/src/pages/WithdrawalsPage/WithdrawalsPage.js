import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWithdrawals, approveWithdrawal, rejectWithdrawal } from '../../store/slices/withdrawalSlice';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import './WithdrawalsPage.css'; 

const WithdrawalsPage = () => {
  const dispatch = useDispatch();
  const withdrawals = useSelector(state => state.withdrawals);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchWithdrawals = async () => {
      try {
        const response = await axios.get('/withdrawals/list', {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setWithdrawals(response.data.withdrawals));
      } catch (error) {
        console.error('Error fetching withdrawals:', error.response?.data?.message || error.message);
      }
    };

    fetchWithdrawals();
  }, [dispatch, token]);

  const handleApprove = async (id) => {
    try {
      await axios.post(`/withdrawals/approve/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(approveWithdrawal(id));
    } catch (error) {
      console.error('Error approving withdrawal:', error.response?.data?.message || error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`/withdrawals/reject/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(rejectWithdrawal(id));
    } catch (error) {
      console.error('Error rejecting withdrawal:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="withdrawals-container">
      <h1>Withdrawals</h1>
      <button className="back-button" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      <ul className="withdrawals-list">
        {withdrawals.map(withdrawal => (
          <li key={withdrawal._id}>
            <strong>Class:</strong> {withdrawal.class.name} - <strong>Student:</strong> {withdrawal.user.username} - <strong>Status:</strong> {withdrawal.status}
            <button onClick={() => handleApprove(withdrawal._id)}>Approve</button>
            <button onClick={() => handleReject(withdrawal._id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WithdrawalsPage;
