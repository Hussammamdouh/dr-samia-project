import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#333',
      color: 'white',
      padding: '40px 20px',
      marginTop: '20px',
    }}>
      <Grid container spacing={4}>
        {/* MISC Section */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button component={Link} to="/privacy-policy" color="inherit" sx={{ marginBottom: '10px' }}>
              Privacy Policy
            </Button>
            <Button component={Link} to="/Terms-and-Conditions" color="inherit" sx={{ marginBottom: '10px' }}>
              Terms and Conditions
            </Button>
            <Button component={Link} to="/about" color="inherit" sx={{ marginBottom: '10px' }}>
              About Us
            </Button>
          </Box>
        </Grid>

        {/* Pricing & Admin Section */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button component={Link} to="/pricing" color="inherit" sx={{ marginBottom: '10px' }}>
              Premium Pricing
            </Button>
            <Button component={Link} to="/developers" color="inherit" sx={{ marginBottom: '10px' }}>
              Developers
            </Button>
            <Button component={Link} to="/Login-admin" color="inherit" sx={{ marginBottom: '10px' }}>
              Admin Dashboard
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{
        textAlign: 'center',
        marginTop: '40px',
        borderTop: '1px solid #555',
        paddingTop: '20px',
      }}>
        <Typography variant="body2" color="inherit">
          © 2024 E-Commerce. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
