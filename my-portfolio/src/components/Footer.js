import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Paper from '@mui/material/Paper';



export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);


  return (
    <Box sx={{ pb: 7 }} ref={ref} >
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          sx={{ bgcolor: 'info.main' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction target="_blank" href='https://github.com/Alex-H1' label="GitHub" icon={<GitHubIcon />} />
          <BottomNavigationAction target="_blank" href='https://www.linkedin.com/in/alex-hernandez-438743233/' label="LinkedIn" icon={<LinkedInIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}


