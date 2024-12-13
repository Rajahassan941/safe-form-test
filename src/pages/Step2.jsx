import React from 'react';
import Dropdown from '../components/Dropdown';
import { validateDropdown } from '../components/validation';

const Step2 = ({ formData, updateFormData, errors }) => {
  return (
    <>
      <Dropdown
        label="Gender"
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'others', label: 'Others' },
        ]}
        value={formData.gender || ''}
        onChange={(e) => updateFormData({ gender: e.target.value })}
        error={errors?.gender}
      />
    </>
  );
};

const validateStep2 = (formData) => {
  const errors = {};
  const genderError = validateDropdown(formData.gender);
  if (genderError) errors.gender = genderError;
  return errors;
};

Step2.validate = validateStep2;

export default Step2;
