import React from 'react';
import { Box, Grid } from '@mui/material';
import FoodCard from './FoodCard';
import eatrice from '../images/rice.svg';
import eatnoodles from '../images/noodles.svg';
import eatsoup from '../images/soup.svg';
import Button from '@mui/material/Button';
import backImage from '../images/Rectangle.svg';
import { Link } from 'react-router-dom';

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
    button: {
        backgroundColor: '#FFA500',
        color: 'black',
        boxShadow: 'none',
    },
    buttonPosition: {
        display: 'flex', 
        justifyContent: 'center'
    },
    buttonPosition1: {
        display: 'flex', 
        justifyContent: 'left',
        paddingTop: '50px',
        paddingLeft: '450px'
    },
    backImage: {
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: '50px'
    },
    lastDesc: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '52px',
        color: 'white',
        margin: '0px 350px 0px 450px'
    }
};

export default function BottomSec() {
  return (
    <Box>
        <Box style={{backgroundColor: '#F4C95D', paddingBottom: '30px'}}>
            <span style={styles.heading}>Our Special Dishes</span>
            <Grid container style={styles.sectionS} justifyContent={'space-around'}>
                <FoodCard
                    image={eatrice}
                    title="EAT ME SPECIAL FRIED RICE"
                    description="Rs 1200"
                />
                <FoodCard
                    image={eatnoodles}
                    title="EAT ME SPECIAL NOODLES"
                    description="Rs 800"
                />
                <FoodCard
                    image={eatsoup}
                    title="EAT ME SPECIAL SOUP"
                    description="Rs 1000"
                />
            </Grid>
            <Box style={styles.buttonPosition}>
                <Button variant="contained" style={styles.button} component={Link} to="/menu">Explore Our Menu</Button>
            </Box>
        </Box>
        <div style={styles.backImage}>
            <span style={styles.lastDesc}>We pride ourselves on making fresh foods from best ingredients</span>
            <Box style={styles.buttonPosition1}>
                <Button variant="contained" style={styles.button} component={Link} to="/menu">Place Your Order</Button>
            </Box>
        </div>
    </Box>
  );
}
