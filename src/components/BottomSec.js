import React from 'react';
import { Box, Grid } from '@mui/material';
import FoodCard from './FoodCard';
import eatrice from '../images/christopher-alvarenga-rQX9eVpSFz8-unsplash.jpg';
import eatnoodles from '../images/ikhsan-baihaqi-pbc2wXbQYpI-unsplash.jpg';
import eatsoup from '../images/melissa-walker-horn-P5IhVmH6FoM-unsplash.jpg';

const styles = {
    sectionS: {
      paddingRight: '20px',
      paddingLeft: '20px',
      paddingTop: '30px',
      paddingBottom: '30px'
    },
    heading: {
        paddingTop: '30px',
        fontWeight: 'bold',
        fontSize: '30px',
        display: 'block',
        textAlign: 'center',
        margin: '0 auto',
    },
};

export default function BottomSec() {
  return (
    <Box style={{backgroundColor: '#FFEFE1'}}>
        <span style={styles.heading}>Our Special Dishes</span>
        <Grid container style={styles.sectionS} justifyContent={'space-around'}>
            <FoodCard
                image={eatrice}
                title="EAT ME SPECIAL FRIED RICE"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <FoodCard
                image={eatnoodles}
                title="EAT ME SPECIAL NOODLES"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <FoodCard
                image={eatsoup}
                title="EAT ME SPECIAL SOUP"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
        </Grid>
    </Box>
  );
}
