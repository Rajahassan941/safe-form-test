import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import StepNavigator from './StepNavigator';
import { Box, Grid, Typography } from '@mui/material';

const MultiStepForm = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const totalSteps = React.Children.count(children);

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const validateStep = () => {
    const stepErrors = {};
    const step = React.Children.toArray(children)[currentStep];
    if (step.props.validate) {
      stepErrors[currentStep] = step.props.validate(formData);
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors[currentStep] || {}).length === 0; 
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
      
    }
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const submitStep =()=>setCurrentStep(0)

  return (
    <Grid sx={{width:500}}>
      <Grid sx={{position:"fixed",top:10,left:80,width:"90vw"}}>
      <Box sx={{mb:10}}>
        <Typography variant='h4' sx={{mb:4}}>
{currentStep===totalSteps-1?'Completed': `Step: ${currentStep+1}`}
        </Typography>
      <ProgressBar  currentStep={currentStep} totalSteps={totalSteps}  />
      </Box>
      </Grid>
    <Grid>
    <Grid>
        {React.Children.toArray(children)[currentStep] &&
          React.cloneElement(React.Children.toArray(children)[currentStep], {
            formData,
            updateFormData,
            errors: errors[currentStep],
          })}
      </Grid>
      <Box sx={{position:"fixed",bottom:10,right:90}}>
      <StepNavigator
        currentStep={currentStep}
        totalSteps={totalSteps}
        nextStep={nextStep}
        prevStep={prevStep}
        submitStep={submitStep}
      />
      </Box>
     
    </Grid>

    
    </Grid>
  );
};

export default MultiStepForm;
