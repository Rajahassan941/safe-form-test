import React from 'react';
import MultiStepForm from './pages/MultiStepForm';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Summary from './pages/Summary';
import { Grid } from '@mui/material';
import Step3 from './pages/Step3';

const App = () => {
  return (
        <Grid sx={{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <MultiStepForm>
      <Step1 validate={Step1.validate} />
      <Step2 validate={Step2.validate} />
      <Step3 validate={Step3.validate} />
     
      <Summary />
    </MultiStepForm>
    </Grid >
  );
};

export default App;
