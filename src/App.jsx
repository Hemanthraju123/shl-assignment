import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const mockAssessments = [
  {
    name: 'Verify G+ Numerical Reasoning',
    url: 'https://www.shl.com/solutions/products/verify-g-plus-numerical-reasoning/',
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: '24 minutes',
    testType: 'Cognitive Ability'
  },
  // More mock data will be replaced with real API integration
];

function App() {
  const [jobDescription, setJobDescription] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with actual API call to process job description
    setRecommendations(mockAssessments);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          SHL Assessment Recommender
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Enter Job Description or URL"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button 
              variant="contained" 
              type="submit"
              disabled={!jobDescription.trim()}
            >
              Get Recommendations
            </Button>
          </form>
        </Paper>

        {recommendations.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Assessment Name</TableCell>
                  <TableCell>Remote Testing</TableCell>
                  <TableCell>Adaptive/IRT</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Test Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recommendations.map((assessment, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <a href={assessment.url} target="_blank" rel="noopener noreferrer">
                        {assessment.name}
                      </a>
                    </TableCell>
                    <TableCell>{assessment.remoteTestingSupport ? 'Yes' : 'No'}</TableCell>
                    <TableCell>{assessment.adaptiveSupport ? 'Yes' : 'No'}</TableCell>
                    <TableCell>{assessment.duration}</TableCell>
                    <TableCell>{assessment.testType}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Container>
  );
}

export default App;