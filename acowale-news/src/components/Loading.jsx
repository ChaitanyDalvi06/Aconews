import React from 'react';
import './Loading.css'; // Import the CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <h1 className="loading-text">ACONEWS</h1>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
