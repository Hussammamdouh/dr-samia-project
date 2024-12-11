import React, { useEffect, useState } from 'react';
import { CircularProgress, Box, Typography, Button, Container, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';

// Styled components for Card and Button
const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
});

const StyledButton = styled(Button)({
  backgroundColor: '#ff5722',  // Orange color for the button
  color: 'white',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#e64a19', // Darker shade on hover
  },
  padding: '12px 20px',
  fontSize: '16px',
  width: '100%',  // Make button full-width
});

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch product');
        setLoading(false);
      });
  }, [id]);

  // Add product to cart
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex((item) => item._id === product._id);

    if (productIndex === -1) {
      cart.push({ ...product, quantity: 1 });  // Add product with initial quantity
    } else {
      cart[productIndex].quantity += 1;  // Increase quantity if product is already in cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to localStorage
    alert('Product added to cart!');
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Container sx={{ maxWidth: 'lg', marginTop: '40px' }}>
      <StyledCard>
        <CardMedia
          component="img"
          alt={product.name}
          height="300"
          image={product.image} // Assuming product.image contains the image URL
          sx={{ borderRadius: '12px', marginBottom: '20px' }}
        />
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: '600', fontFamily: 'Poppins', marginBottom: '20px' }}>
            {product.name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#757575', marginBottom: '20px' }}>
            {product.description}
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            ${product.price}
          </Typography>
          <StyledButton onClick={handleAddToCart}>
            Add to Cart
          </StyledButton>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default Product;
