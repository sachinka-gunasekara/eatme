import React from 'react';
import { Box, Grid } from '@mui/material';
import { LocationOnRounded, LocalPhoneRounded } from '@mui/icons-material';
import tray from '../images/trayblack.png'
import facebook from '../images/facebook.svg'
import insta from '../images/instagram.svg'

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
  gridItem1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '30px'
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
  },
};

export default function Footer() {
  return (
    <Box>
      <Box style={{ backgroundColor: '#FFEFE1', padding: '80px 80px 30px 80px' }}>
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
            <span>Home</span>
            <span>Menu</span>
            <span>Offers</span>
          </Grid>
          <Grid item xs={3} style={styles.gridItem}>
            <span style={{fontWeight: 'bold', paddingBottom: '30px'}}>Contact Us</span>
            <Box style={styles.iconContainer}>
              <LocationOnRounded /><span>0704566789</span><br/>
              <LocalPhoneRounded /><span>Galle road, Matara</span>
            </Box>
          </Grid>
        </Grid>
        <Grid style={styles.gridItem1}>
          <span>Follow Us On</span>
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: '20px', justifyContent: 'space-evenly'}}>
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
      </Box>
    </Box>
  );
}
