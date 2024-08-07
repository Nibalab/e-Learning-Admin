import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile, setFiles } from '../../store/slices/fileSlice';
import { setClasses } from '../../store/slices/classSlice'; 
import axios from '../../utils/axios';
import './FilesPage.css';
import { useNavigate } from 'react-router-dom';

const FilesPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  const classes = useSelector((state) => state.classes); // Access classes from Redux state
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch files and classes from backend
    const fetchFilesAndClasses = async () => {
      try {
        const [filesResponse, classesResponse] = await Promise.all([
          axios.get('/files/list', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('/classes/list', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        dispatch(setFiles(filesResponse.data.files));
        dispatch(setClasses(classesResponse.data.classes)); // Set classes in Redux state
      } catch (error) {
        console.error('Error fetching data:', error.response?.data?.message || error.message);
      }
    };

    fetchFilesAndClasses();
  }, [dispatch, token]);

  const handleFileUpload = async () => {
    if (selectedFile && selectedClassId) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('classId', selectedClassId);

      try {
        const response = await axios.post('/files/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(uploadFile(response.data.file));
        setMessage('File uploaded successfully!');
        setSelectedFile(null);
        setSelectedClassId('');
      } catch (error) {
        setMessage('Failed to upload file');
        console.error('Error uploading file:', error.response?.data?.message || error.message);
      }
    } else {
      setMessage('Please select a file and a class.');
    }
  };

  return (
    <div className="files-container">
      <h1>Manage Files</h1>
      <button className="back-button" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      <div className="upload-form">
        <select
          value={selectedClassId}
          onChange={(e) => setSelectedClassId(e.target.value)}
          className="class-select"
        >
          <option value="">Select a class</option>
          {classes.map((cls) => (
            <option key={cls._id} value={cls._id}>
              {cls.name}
            </option>
          ))}
        </select>
        <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
        <button onClick={handleFileUpload}>Upload File</button>
      </div>
      {message && <p className="message">{message}</p>}
      <ul className="files-list">
        {files.map((file) => (
          <li key={file._id}>
            {file.filename} - Uploaded on: {new Date(file.uploadedAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilesPage;
