import { FormControl, TextField } from '@mui/material';
import React from 'react';

const TextFieldCustom = ({ label, value, onChange, placeholder, error }) => {
  return (
    <>
  <FormControl fullWidth>
  <TextField      value={value} 
        onChange={onChange} 
        placeholder={placeholder}  />
      {error && <p style={{ color: 'red' }}>{error}</p>}

  </FormControl>
     

    </>
  );
};

export default TextFieldCustom;
