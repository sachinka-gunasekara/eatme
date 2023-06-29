import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Home', 'Menu', 'Offers'];

const styles = {
  button: {
    backgroundColor: '#FFA500',
    color: 'black',
    boxShadow: 'none'
  }
};

function Topbar() {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ pl: 12, pr: 12 }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
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

            <Box sx={{ flexGrow: 1, display: 'flex'}}>
                {pages.map((page) => (
                <Button
                    key={page}
                    sx={{ my: 2, color: 'black', display: 'block', justifyContent: 'center', alignContent: 'center' }}
                >
                    {page}
                </Button>
                ))}
            </Box>
            <Button color="inherit" style={styles.button}>Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Topbar;