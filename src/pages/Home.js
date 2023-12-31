import { Box, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import firstimg from '../images/firstimg.svg'
import Button from '@mui/material/Button';
import SecondSec from '../components/SecondSec';
import BottomSec from '../components/BottomSec';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';

const styles = {
  wrapper: {
    backgroundColor: "#FFFFFF",
    paddingRight: '80px',
    paddingLeft: '80px',
    paddingTop: '10px',
    paddingBottom: '30px'
  },
  landing: {
    backgroundColor: "#F4C95D",
    maxWidth: 'none',
    borderRadius: '40px',
    padding: '50px'
  },
  image: {
    width: '80%', 
    height: 'auto',
    display: 'block',
    margin: 'auto',
    borderRadius: '50%'
  },
  heroTopic: {
    fontSize: '72px',
    fontWeight: 'bold'
  },
  heroDesc: {
    fontSize: '20px',
    marginTop: '160px',
    lineHeight: '1.5'
  },
  button: {
    backgroundColor: '#DD7230',
    color: 'black',
    boxShadow: 'none'
  }
};

export default function Home() {
  return (
    <Box>
      <Topbar />
      <Box style={styles.wrapper}>
        <Grid container style={styles.landing}>
          <Grid item xs={5}>
            <div style={{ marginTop: '50px' , marginBottom: '50px'}}>
              <span style={styles.heroTopic}>Unleash Your Inner Foodie</span><br/>
            </div>
            <div style={{ marginBottom: '50px'}}>
              <span style={styles.heroDesc}>Get ready to embark on a delectable journey where taste buds are tantalized, 
                culinary boundaries are pushed, and food becomes an extraordinary experience.</span>
            </div>
            <Button variant="contained" style={styles.button} component={Link} to="/menu">Place Your Order</Button>
          </Grid>
          <Grid item xs={7}>
              <img src={firstimg} alt="img" style={styles.image} />
          </Grid>
        </Grid>
      </Box>
      <SecondSec/>
      <BottomSec/>
      <Footer />
    </Box>
  );
}
