import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


export default function About() {
  return (
    <Box sx={{ width: '100%',  }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL+"/JATE.jpg"}
                alt="Just Another Text Editor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  J.A.T.E
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Just Another Text Editor or J.A.T.E is a pwa application for note taking.
              
                </Typography>
              </CardContent>
              <CardActions>
                <Button target="_blank" href="https://evening-escarpment-48141.herokuapp.com/" size="small">Deployed site</Button>
                <Button target="_blank" href="https://github.com/Alex-H1/text-editor.git" size="small">GitHub repository</Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL+"/social.jpg"}
                alt="Social media API"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Social Network API
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This Social Network API is has the potential to work as a backend for social media site.
                </Typography>
              </CardContent>
              <CardActions>
                <Button target="_blank" href="https://github.com/Alex-H1/social-network-api.git" size="small">GitHub repository</Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL+"/AniFan.jpg"}
                alt="AniFan"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  AniFan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This application recommends the user new anime shows.
                </Typography>
              </CardContent>
              <CardActions>
                <Button target="_blank" href="https://stark-forest-86865.herokuapp.com/" size="small">Deployed site</Button>
                <Button target="_blank" href="https://github.com/akaur09/AniFan.git" size="small">GitHub repository</Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL+"/ecommerce.jpg"}
                alt="ecommerce api"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  E-Commerce Back End
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This Backend application simulates making a database for ecommerce inventory.
                </Typography>
              </CardContent>
              <CardActions>
                <Button target="_blank" href="https://github.com/Alex-H1/Ecommerce-backend.git" size="small">GitHub repository</Button>
              </CardActions>
          </Card>        
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL+"/NoteTaker.jpg"}
                alt="NoteTaker"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Note Taker
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This note taking app is a deployed application. 
                </Typography>
              </CardContent>
              <CardActions>
                <Button target="_blank" href="https://vast-ridge-39280.herokuapp.com/" size="small">Deployed site</Button>
                <Button target="_blank" href="https://github.com/Alex-H1/Note-taker.git" size="small">GitHub repository</Button>
              </CardActions>
          </Card>        
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL+"/celebrity.jpg"}
                alt="celebrity matchmaker quiz"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Celebrity Matchmaker
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This application is a quiz to find your celebrity match.
                </Typography>
              </CardContent>
              <CardActions>
                <Button target="_blank" href="https://mayaimorales.github.io/celebrity-matchmaker/" size="small">Deployed site</Button>
                <Button target="_blank" href="https://github.com/Alex-H1/celebrity-matchmaker.git" size="small">GitHub repository</Button>
              </CardActions>
          </Card>        
        </Grid>
      </Grid>
    </Box>
  );
}
