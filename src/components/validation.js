export const validateTextField = (value) => {
  if (!value) return 'This field is required.';
  return '';
};

export const validateDropdown = (value) => {
  if (!value) return 'Please select an option.';
  return '';
};

// export const validateEmail = (value) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!value) return 'This field is required.';
//   if (!emailRegex.test(value)) return 'Enter a valid email address.';
//   return '';
// };

export const validateDate = (value) => {
  if (!value) return 'Please select a date.';
  return '';
};
