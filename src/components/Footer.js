import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { LocationOnRounded, LocalPhoneRounded } from '@mui/icons-material';
import tray from '../images/trayblack.png'
import facebook from '../images/facebook.svg'
import insta from '../images/instagram.svg'
import { Link } from 'react-router-dom';

const styles = {
  sectionS: {
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  iconContainer: {
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
  },
  logo: {
    marginRight: '8px',
    width: '40px', 
    height: '40px', 
  },
  logo1: {
    paddingRight: '10px',
    width: '40px', 
    height: '40px', 
  },
  logo2: {
    paddingLeft: '10px',
    width: '40px', 
    height: '40px', 
  }
};

export default function Footer() {
  return (
    <Box>
      <Box style={{ backgroundColor: '#F4C95D', padding: '80px 80px 30px 80px' }}>
        <Grid container justifyContent={'center'}>
          <Grid item xs={3} style={styles.gridItem}>
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '30px'}}>
              <span style={{paddingRight: '20px', fontWeight: 'bold'}}>EAT ME</span>
              <img
                src={tray}
                alt="Logo"
                style={styles.logo}
              />
            </div>
            <span>Unleash Your Inner Foodie</span>
          </Grid>
          <Grid item xs={3} style={styles.gridItem}>
            <span style={{fontWeight: 'bold', paddingBottom: '30px'}}>Links</span>
            <Button variant="text" size="small" component={Link} to="/">Home</Button>
            <Button variant="text" size="small" component={Link} to="/menu">Menu</Button>
            <Button variant="text" size="small" component={Link} to="/offers">Offers</Button>
          </Grid>
          <Grid item xs={3} style={styles.gridItem}>
            <span style={{fontWeight: 'bold', paddingBottom: '30px'}}>Contact Us</span>
            <Box style={styles.iconContainer}>
              <LocalPhoneRounded /><span>0704566789</span><br/>
              <LocationOnRounded/><span>Galle road, Matara</span>
            </Box>
          </Grid>
          <Grid item xs={3} style={styles.gridItem}>
          <span style={{fontWeight: 'bold', paddingBottom: '30px'}}>Follow Us On</span>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <img
                src={facebook}
                alt="fb"
                style={styles.logo1}
              />
              <img
                src={insta}
                alt="insta"
                style={styles.logo2}
              />
            </div>
        </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
