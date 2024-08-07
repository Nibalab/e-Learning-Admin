import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClass, setClasses } from '../../store/slices/classSlice';
import axios from '../../utils/axios';
import './ClassesPage.css';
import { useNavigate } from 'react-router-dom'; 

const ClassesPage = () => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const classes = useSelector(state => state.classes);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('/classes/list');
        dispatch(setClasses(response.data.classes));
      } catch (error) {
        console.error('Error fetching classes:', error.response?.data?.message || error.message);
      }
    };

    fetchClasses();
  }, [dispatch]);

  const handleAddClass = async () => {
    if (className && description) {
      try {
        const response = await axios.post('/classes/create', {
          name: className,
          description: description,
        });
        dispatch(addClass(response.data.class));
        setMessage('Class added successfully!');
        setClassName('');
        setDescription('');
      } catch (error) {
        setMessage('Failed to add class');
        console.error('Error adding class:', error.response?.data?.message || error.message);
      }
    }
  };

  return (
    <div className="classes-container">
      <h1>Manage Classes</h1>
      <button className="back-button" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      <form className="class-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="button" onClick={handleAddClass}>Add Class</button>
      </form>
      {message && <p className="message">{message}</p>}
      <ul className="classes-list">
        {classes.map(cls => (
          <li key={cls._id}>
            <strong>{cls.name}</strong>: {cls.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassesPage;
