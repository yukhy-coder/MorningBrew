import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

function ContactUs() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold" color="#3e2723">
        Visit Us
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
        We love meeting new friends. Come have a cup with us!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Details */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 4, height: '100%', width: '360px'}}>
            
            {/* Address */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <LocationOnIcon sx={{ color: '#3e2723', mr: 2, fontSize: 30, mt: -0.5 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Address</Typography>
                <Typography variant="body1">
                  Ground Floor, The Walk<br />
                  Cebu IT Park, Lahug<br />
                  Cebu City, Philippines 6000
                </Typography>
              </Box>
            </Box>

            {/* Phone */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PhoneIcon sx={{ color: '#3e2723', mr: 2, fontSize: 30 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Phone</Typography>
                <Typography variant="body1">(032) 231-4567</Typography>
                <Typography variant="body2" color="text.secondary">+63 917 123 4567</Typography>
              </Box>
            </Box>

             {/* Email */}
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon sx={{ color: '#3e2723', mr: 2, fontSize: 30 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Email</Typography>
                <Typography variant="body1">hello@morningbrew.ph</Typography>
              </Box>
            </Box>

            {/* Hours */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <AccessTimeIcon sx={{ color: '#3e2723', mr: 2, fontSize: 30, mt: -0.5 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Opening Hours</Typography>
                <Typography variant="body2">Mon - Fri: 7:00 AM - 10:00 PM</Typography>
                <Typography variant="body2">Sat - Sun: 8:00 AM - 11:00 PM</Typography>
              </Box>
            </Box>

          </Paper>
        </Grid>

        {/* Google Map Embed */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ height: '100%', minHeight: '300px', width: '750px', overflow: 'hidden', borderRadius: 2 }}>
            <iframe 
              title="Cebu IT Park Map"
              // 👇 This is the real link for Cebu IT Park
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.352466723224!2d123.9034803147963!3d10.32230729262947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9992383d47341%3A0x7c43058862f3a675!2sCebu%20IT%20Park!5e0!3m2!1sen!2sph!4v1689234567890!5m2!1sen!2sph"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px' }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;