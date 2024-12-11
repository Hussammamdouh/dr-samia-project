import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button, Skeleton, Card, CardContent } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system'; // To create custom styled components

// Styled components using MUI's styling system
const CustomCard = styled(Card)({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',  // Slight zoom effect
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Shadow on hover
  },
  borderRadius: '12px',  // Rounded corners
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Default shadow
});

const StyledButton = styled(Button)({
  backgroundColor: '#ff5722',  // Orange button color
  color: 'white',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#e64a19', // Darker shade on hover
  },
  padding: '8px 16px',
  fontSize: '14px',
});

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  const retryFetchProducts = () => {
    setLoading(true);
    setError(null);
    axios
      .get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Grid container spacing={3}>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton variant="rectangular" height={300} sx={{ borderRadius: '12px' }} /> {/* Rounded corners */}
          </Grid>
        ))}
      </Grid>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Typography variant="h6" color="error" sx={{ marginBottom: '16px' }}>
          {error}
        </Typography>
        <StyledButton onClick={retryFetchProducts}>Retry</StyledButton>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}> {/* Adding background color for the page */}
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: '600', fontFamily: 'Poppins' }}>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <CustomCard>
              <CardContent>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins', marginBottom: '8px' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#757575', marginBottom: '12px' }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: '12px', fontFamily: 'Roboto' }}>
                  ${product.price}
                </Typography>
                <StyledButton component={Link} to={`/product/${product._id}`} variant="contained">
                  View Details
                </StyledButton>
              </CardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
