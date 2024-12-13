import React from 'react';


import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Zero-Knowledge E-Voting
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
          <Button color="inherit" onClick={() => navigate('/vote')}>Vote</Button>
          <Button color="inherit" onClick={() => navigate('/results')}>Results</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;