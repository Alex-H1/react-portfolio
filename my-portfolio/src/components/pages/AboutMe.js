import * as React from 'react';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div>
      <h1>About me</h1>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
          <div>
            <img className="object-contain h-48 w-96" src={process.env.PUBLIC_URL+"/mypicture.JPG"} alt="Alex Hernandez" />
          </div>        
      </Box>
      <br/>
      <br/>
      <p>
      My name is Alexander Hernandez and I am currently a student at U.C Berkely Extension Coding Bootcamp. My background includes CNC Machining and Painting
      </p>
    </div>

  
  );
}
