import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Custom Styled Components for Card and Button
const StyledCard = styled(Card)({
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
  fontSize: '14px',
  width: '100%',  // Make button full-width
});

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get cart data from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    setLoading(false);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (cart.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Typography variant="h6">Your cart is empty</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {cart.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item._id}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: '600' }}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575', marginBottom: '10px' }}>
                ${item.price}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '15px' }}>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item._id, parseInt(e.target.value))
                  }
                  style={{
                    width: '60px',
                    marginLeft: '10px',
                    padding: '5px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                />
              </Typography>
              <StyledButton
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveFromCart(item._id)}
              >
                Remove from Cart
              </StyledButton>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
      <Box sx={{ marginTop: 4, textAlign: 'center', width: '100%' }}>
        <Typography variant="h6">Total: ${calculateTotal()}</Typography>
        <StyledButton component={Link} to="/checkout" sx={{ marginTop: 2 }}>
          Proceed to Checkout
        </StyledButton>
      </Box>
    </Grid>
  );
};

export default Cart;
