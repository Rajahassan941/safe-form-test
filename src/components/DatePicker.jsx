import { FormControl } from '@mui/material';
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickers = ({ label, selected, onChange, error }) => {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  return (
    <>
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={label} format='DD/MM/YYYY' onChange={onChange} selected={selected} defaultValue={dayjs('2022-04-17')} />
        
      </DemoContainer>
    </LocalizationProvider>
    </FormControl>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default DatePickers;
