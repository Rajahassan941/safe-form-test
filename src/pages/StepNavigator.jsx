import { Button } from '@mui/material';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const StepNavigator = ({ currentStep, totalSteps, nextStep, prevStep,submitStep }) => {
  const handlesubmit=()=>{
    // submitStep()
    toast('Completed!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
      setTimeout(()=>{
        submitStep()
      },3000)
  }

  return (
    <>
      {currentStep > 0 && <Button variant='contained' onClick={prevStep}>Back</Button>}
      {currentStep < totalSteps - 1 && <Button sx={{ml:2}} variant='contained' onClick={nextStep}>Next</Button>}
      {currentStep === totalSteps - 1 && <Button sx={{ml:2}} variant='contained' onClick={handlesubmit}>Submit</Button>}
      <ToastContainer/>
    </>
  );
};

export default StepNavigator;
