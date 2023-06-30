import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import Topbar from '../components/Topbar';

export default function Offers() {
  return (
    <Box>
      <Topbar />
      <Grid container component="main" 
           sx={{ display: 'flex', flexDirection: 'row', height: '80vh', justifyContent: 'center', marginTop: '40px', marginBottom: '40px' }}>
        <CssBaseline />
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" component="h1">
            Stay Tuned!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
