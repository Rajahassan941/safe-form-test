import React from 'react';
import Dropdown from '../components/Dropdown';
import { validateDate } from '../components/validation';
import DatePickers from '../components/DatePicker';

const Step3 = ({ formData, updateFormData, errors }) => {
  return (
    <>
      <DatePickers
        label="Date"
        value={formData.date || ''}
        onChange={(e) => updateFormData({ date: e })}
        error={errors?.date}
      />
    </>
  );
};

const validateStep3 = (formData) => {
  const errors = {};
  const dateError = validateDate(formData.date);
  if (dateError) errors.date = dateError;
  return errors;
};

Step3.validate = validateStep3;

export default Step3;
