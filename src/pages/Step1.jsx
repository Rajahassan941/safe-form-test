import React from 'react';
import TextField from '../components/TextField';
import { validateTextField } from '../components/validation';

const Step1 = ({ formData, updateFormData, errors }) => {
  return (
    <>
      <TextField
        label="Name"
        value={formData.name || ''}
        onChange={(e) => updateFormData({ name: e.target.value })}
        placeholder="Enter your name"
        error={errors?.name}
      />
    </>
  );
};

const validateStep1 = (formData) => {
  const errors = {};
  const nameError = validateTextField(formData.name);
  if (nameError) errors.name = nameError;
  return errors;
};

Step1.validate = validateStep1;

export default Step1;
