import React from 'react';

const FileUpload = ({ label, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="file" onChange={onChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
