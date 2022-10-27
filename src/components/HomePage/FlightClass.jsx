import React from 'react'

import { RadioGroup, Radio, FormControlLabel, Typography } from '@mui/material';
import { cyan } from '@mui/material/colors';


const stone100= '#f8f6f5';
const stone200= '#F3F1F0';


const FlightClass = () => {
    const [value, setValue] = React.useState('economic');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value)
      };

  return (
    <RadioGroup 
    name="flighCategory" 
    value={value}
    onChange={handleChange}
    defaultValue='first'
    row 
    className="flex my-4 justify-between "
    >
        <FormControlLabel id="economic" 
        value="economic" 
        control={<Radio 
            size='medium' sx={{
            color: stone100,
            '&.Mui-checked': {
              color: cyan[600],
            },
          }}
          />}  
          label={<Typography variant="h6">Economic</Typography> }
        />
        <FormControlLabel id="executive" 
        value="executive" control={<Radio 
            size='medium' sx={{
            color: stone100,
            '&.Mui-checked': {
              color: cyan[600],
            },
          }}
          />}  
          label={<Typography variant="h6">Executive</Typography> }
           />
    </RadioGroup>
  )
}

export default FlightClass
//    

