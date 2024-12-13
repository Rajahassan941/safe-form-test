import { Card, Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';

const Summary = ({ formData }) => {

console.log(dayjs(formData.date))
const formattedDate = formData.date.format('DD/MM/YYYY');
  return (
    <Grid sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      
      {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      <Card  sx={{p:3.5,m:3}}>
<Typography variant='h5' sx={{mb:1}}>
  Form data
</Typography>
      <Typography variant='h6' sx={{textAlign:"left"}}>
      Name: {formData.name}
      </Typography>
      <Typography variant='h6' sx={{textAlign:"left"}}>
     Gender: {formData.gender}
     {/* Gender: {formData.date} */}
    
      </Typography>
      {formData.date &&
        <Typography variant='h6' sx={{textAlign:"left"}}>
        Date: {formattedDate}

       
         </Typography>
      }
    
      </Card>
    
     
     
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </Grid>
  );
};

export default Summary;
