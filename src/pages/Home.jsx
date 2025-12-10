import React from 'react';
import { Box, Typography, Container, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// 1. DATA: List of drinks with Philippine pricing
const drinks = [
  {
    title: "Kapeng Barako",
    price: "₱120",
    image: "/4.png",
    description: "Our signature strong Batangas brew. Bold, intense, and served black to wake up your senses."
  },
  {
    title: "Spanish Latte",
    price: "₱160",
    image: "/5.png",
    description: "A local favorite. Sweet condensed milk blended with robust espresso and creamy steamed milk."
  },
  {
    title: "Iced Caramel Macchiato",
    price: "₱180",
    image: "/6.png",
    description: "Cold and refreshing. Vanilla syrup, cold milk, ice, and espresso marked with caramel drizzle."
  }
];

function Home() {
  return (
    <Box>
      {/* 2. HERO SECTION */}
      <Box
        sx={{
          backgroundImage: 'url(/3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          bgcolor: 'rgba(0,0,0,0.6)', // Darker tint for better text readability
          backgroundBlendMode: 'darken'
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ px: 2 }}>
          Wake Up to Greatness
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, maxWidth: '700px', px: 2 }}>
          Serving the finest locally sourced beans in the heart of Cebu.
        </Typography>
        <Button variant="contained" size="large" color="warning" component={RouterLink} to="/contact" sx={{ px: 5 }}>
          Order Now
        </Button>
      </Box>

      {/* 3. FEATURED DRINKS SECTION */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="#3e2723" sx={{ mb: 6 }}>
          Our Best Sellers
        </Typography>
        
        <Grid container spacing={4}>
          {drinks.map((drink, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card elevation={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '360px'}}>
                <CardMedia
                  component="img"
                  height="250"
                  image={drink.image}
                  alt={drink.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom fontWeight="bold">
                    {drink.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {drink.description}
                  </Typography>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {drink.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;