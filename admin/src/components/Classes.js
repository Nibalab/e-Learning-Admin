// src/components/Classes.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClass, setClasses } from '../store/slices/classSlice';

const Classes = () => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const classes = useSelector(state => state.classes);

  const handleAddClass = () => {
    if (className && description) {
      const newClass = { id: Date.now(), name: className, description };
      dispatch(addClass(newClass));
      setClassName('');
      setDescription('');
    }
  };

  return (
    <div>
      <h1>Manage Classes</h1>
      <input
        type="text"
        placeholder="Class Name"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddClass}>Add Class</button>
      <ul>
        {classes.map(cls => (
          <li key={cls.id}>
            <strong>{cls.name}</strong>: {cls.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Classes;
