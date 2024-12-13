import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';
import axios from 'axios'; // Import axios for API calls

const Register = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleRegister = async () => {
    // Call the API to register the voter
    try {
      const response = await axios.post('/register', { voter_id: walletAddress });
      console.log('Registered with nonce:', response.data.nonce);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Voter Registration
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Wallet Address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegister}
            sx={{ mt: 2 }}
          >
            Register to Vote
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;