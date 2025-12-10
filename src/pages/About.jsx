import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        
        {/* Left Side: Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom fontWeight="bold" color="#3e2723">
            Our Story
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            It started with a simple idea in 2023: serve coffee that makes people pause and smile. 
            What began as a small cart on the side walk has grown into a community hub for coffee lovers.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            We believe in sustainability. That's why every bean we grind is ethically sourced directly from farmers 
            who take pride in their craft.
          </Typography>
        </Grid>

        {/* Right Side: Two Images Grid */}
        <Grid item xs={12} md={6} justifyContent={"center"}>
           {/* We create a nested container for the two photos */}
          <Grid container spacing={2} justifyContent={"center"}>
            
            {/* Photo 1 */}
            <Grid item xs={6}>
              <Box
                component="img"
                // Using a slightly taller aspect ratio (300x400) looks good side-by-side
                src="/barista1.png"
                alt="Barista pouring latte art"
                sx={{ width: '279px', height: '287px', objectFit: 'cover', borderRadius: 2, boxShadow: 3 }}
              />
            </Grid>

            {/* Photo 2 */}
            <Grid item xs={6}>
               <Box
                component="img"
                src="/barista2.png"
                alt="Barista serving coffee"
                sx={{ width: '279px', height: '287px', objectFit: 'cover', borderRadius: 2, boxShadow: 3 }}
              />
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      {/* The "Philosophy" Section */}
      <Paper elevation={3} sx={{ mt: 8, p: 6, bgcolor: '#f5f5f5', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="#3e2723">
          Our Beans Philosophy
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', fontStyle: 'italic' }}>
          "We don't just roast beans; we honor them. We roast in small batches to ensure that the unique flavor profile 
          of each region shines through in your cup."
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;