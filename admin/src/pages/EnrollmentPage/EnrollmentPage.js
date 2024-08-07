import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEnrollments } from '../../store/slices/enrollmentSlice';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import './EnrollmentsPage.css'; 

const EnrollmentsPage = () => {
  const dispatch = useDispatch();
  const enrollments = useSelector(state => state.enrollments);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/enrollments/list', {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setEnrollments(response.data.enrollments));
      } catch (error) {
        console.error('Error fetching enrollments:', error.response?.data?.message || error.message);
      }
    };

    fetchEnrollments();
  }, [dispatch]);

  return (
    <div className="enrollments-container">
      <h1>Enrollments</h1>
      <button className="back-button" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      <ul className="enrollments-list">
        {enrollments.map(enrollment => (
          <li key={enrollment._id}>
            <strong>Class:</strong> {enrollment.class.name} - <strong>Student:</strong> {enrollment.user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollmentsPage;
