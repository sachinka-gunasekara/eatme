import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box, Grid } from '@mui/material';
import React from 'react';
import medal from '../images/Medal.svg'
import snap from '../images/Snap.svg'
import fasttime from '../images/Fast time.svg'

const styles = {
    wrapper: {
      backgroundColor: "#FFFFFF",
      paddingRight: '80px',
      paddingLeft: '80px',
      paddingTop: '10px',
      paddingBottom: '30px'
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'space-between'
    }
  };

const CustomCard = ({ image, title, description }) => {
  return (
    <Card sx={{ boxShadow: 'none',paddingTop: '30px' }}>
      <CardMedia
        component="img"
        image={image}
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: '#FFEFE1',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          textAlign: 'center',
          padding: '30px'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function SecondSec() {
  return (
      <Box style={styles.wrapper}>
        <Grid container justifyContent={'center'}>
          <Grid item xs={3} style={styles.gridItem}>
            <CustomCard
              image={medal}
              title="Best Quality"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </Grid>
          <Grid item xs={3} style={styles.gridItem}>
            <CustomCard
              image={snap}
              title="Easy to Order"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </Grid>
          <Grid item xs={3} style={styles.gridItem}>
            <CustomCard
              image={fasttime}
              title="Fastest Delivery"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </Grid>
        </Grid>
    </Box>
  );
}
