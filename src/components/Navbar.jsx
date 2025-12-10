import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CoffeeIcon from '@mui/icons-material/Coffee';

function Navbar() {
  return (
    // Coffee brown color hex code: #3e2723
    <AppBar position="static" sx={{ backgroundColor: '#3e2723' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <CoffeeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
            Morning Brew
          </Typography>
          <Box>
            <Button color="inherit" component={RouterLink} to="/">Home</Button>
            <Button color="inherit" component={RouterLink} to="/about">Our Story</Button>
            <Button color="inherit" component={RouterLink} to="/contact">Visit Us</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;