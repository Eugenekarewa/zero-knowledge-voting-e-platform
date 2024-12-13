import { Container, Typography, Paper, Box, LinearProgress } from '@mui/material';
import React from 'react';

const Results = () => {
  const mockResults = [
    { candidate: 'Candidate 1', votes: 150, percentage: 45 },
    { candidate: 'Candidate 2', votes: 100, percentage: 30 },
    { candidate: 'Candidate 3', votes: 83, percentage: 25 },
  ];

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Election Results
        </Typography>
        <Box sx={{ mt: 4 }}>
          {mockResults.map((result) => (
            <Box key={result.candidate} sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                {result.candidate}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Votes: {result.votes} ({result.percentage}%)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={result.percentage}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Results;
