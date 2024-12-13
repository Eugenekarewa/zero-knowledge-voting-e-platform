import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Box,
} from '@mui/material';
import axios from 'axios'; // Import axios for API calls


const Vote = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleVote = async () => {
    const voterAddress = '0x...'; // Get from wallet connection
    const proof = 'dummy-proof'; // Generate ZK proof
    // Call the API to cast the vote
    try {
      const response = await axios.post('/vote', {
        voter_id: voterAddress,
        vote: parseInt(selectedOption),
        proof: proof,
      });
      console.log('Vote cast successfully:', response.data.success);
    } catch (error) {
      console.error('Vote casting failed:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cast Your Vote
        </Typography>
        <RadioGroup
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <FormControlLabel value="1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="2" control={<Radio />} label="Option 2" />
        </RadioGroup>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleVote}
            disabled={!selectedOption}
          >
            Submit Vote
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Vote;
