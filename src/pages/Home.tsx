import { Container, Typography, Paper, Box } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Zero-Knowledge E-Voting
        </Typography>
        <Typography variant="body1" paragraph>
          This platform enables secure and private voting using zero-knowledge proofs.
        </Typography>
        <Box>
          <Typography variant="h6" gutterBottom>
            Key Features:
          </Typography>
          <Typography component="ul">
            <li>Secure voter registration</li>
            <li>Anonymous voting</li>
            <li>Verifiable results</li>
            <li>Zero-knowledge proof technology</li>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;