import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For simplicity, we'll assume the cart data is stored in localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    setLoading(false);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">${item.price}</Typography>
              <Typography variant="body2">Quantity: {item.quantity}</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveFromCart(item.id)}
                sx={{ marginTop: 2 }}
              >
                Remove from Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Total: ${calculateTotal()}</Typography>
        <Button variant="contained" color="primary" component={Link} to="/checkout">
          Proceed to Checkout
        </Button>
      </Box>
    </Grid>
  );
};

export default Cart;
