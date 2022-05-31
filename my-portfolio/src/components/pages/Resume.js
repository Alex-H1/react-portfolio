import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';




const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Resume() {
  const [dense, setDense] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={dense}>
                <ListItem disablePadding>
                  <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                     Front-end
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="HTML"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="CSS"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="JavaScript"
                  />
                </ListItem>
                <ListItem disablePadding> 
                  <ListItemText
                    primary="JQuery"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="React"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Responsive design"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Bootstrap"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Bulma.io"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Tailwindcss"
                  />
                </ListItem>
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={dense}>
                <ListItem disablePadding>
                  <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                     Back-end
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="APIs"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Node"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Express"
                  />
                </ListItem>
                <ListItem disablePadding> 
                  <ListItemText
                    primary="MySQL, Sequelize"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="MongoDB, Mongoose"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="REST"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="GraphQl"
                  />
                </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
