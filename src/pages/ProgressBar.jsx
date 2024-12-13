import { LinearProgress } from '@mui/material';
import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  return (
    <div style={{ width: '100%', background: '#ccc' }}>
    
            <LinearProgress variant="determinate" value={progress} />

    </div>
  );
};

export default ProgressBar;
