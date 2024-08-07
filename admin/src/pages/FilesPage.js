// src/pages/FilesPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../store/slices/fileSlice';

const FilesPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const files = useSelector(state => state.files);

  const handleFileUpload = () => {
    if (selectedFile) {
      const fileData = {
        id: Date.now(),
        filename: selectedFile.name,
        uploadedAt: new Date().toISOString(),
      };
      dispatch(uploadFile(fileData));
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <h1>Manage Files</h1>
      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <button onClick={handleFileUpload}>Upload File</button>
      <ul>
        {files.map(file => (
          <li key={file.id}>
            {file.filename} - Uploaded on: {new Date(file.uploadedAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilesPage;
