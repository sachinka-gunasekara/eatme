import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import tray from '../images/trayblack.png';
import { ShoppingCartRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Offers', path: '/offers' },
];

const styles = {
  button: {
    backgroundColor: '#DD7230',
    color: 'black',
    boxShadow: 'none'
  },
  logo: {
    marginRight: '8px',
    width: '40px', 
    height: '40px', 
  },
  iconContainer: {
    display: 'flex',
    color: 'black'
  },
};

function Topbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ pl: 12, pr: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', paddingRight: '400px' }}>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              EAT ME
            </Typography>
            <img
              src={tray}
              alt="Logo"
              style={styles.logo}
            />
          </div>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'black', display: 'block' }}
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            ))}
            <Box style={styles.iconContainer}>
              <ShoppingCartRounded />
            </Box>
          </Box>
          <Button color="inherit" style={styles.button} component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar;
