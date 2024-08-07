// src/components/Enrollments.js
import React from 'react';
import { useSelector } from 'react-redux';

const Enrollments = () => {
  const enrollments = useSelector(state => state.enrollments);

  return (
    <div>
      <h1>Enrollments</h1>
      <ul>
        {enrollments.map(enrollment => (
          <li key={enrollment.id}>
            <strong>Class:</strong> {enrollment.className} - <strong>Student:</strong> {enrollment.studentName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Enrollments;
