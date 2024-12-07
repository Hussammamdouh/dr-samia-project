import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', padding: '20px 0' }}>
      <Container>
        <Typography variant="body2" color="white" align="center">
          © 2024 E-Commerce, All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
