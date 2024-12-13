import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const Dropdown = ({ label, options, value, onChange, error }) => {
  return (
    <>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
      <Select value={value} onChange={onChange}     label="Gender">
        {options?.map((option, index) => (

          <MenuItem  key={index} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>

      </FormControl>
  
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default Dropdown;
