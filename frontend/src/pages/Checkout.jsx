import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CircularProgress, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styled } from '@mui/system';

// Styled components for Card and Button
const StyledCard = styled(Card)({
  padding: '30px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '600px', // Card width limit
  margin: 'auto', // Centering the card horizontally
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
  transition: 'background-color 0.3s ease',
});

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('COD');  // Default to 'Cash on Delivery'
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Get cart data from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    setLoading(false);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value); // Set selected payment method (COD, Visa, PayPal)
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleConfirmOrder = async () => {
    const token = localStorage.getItem('token'); // Get JWT token from localStorage

    // Prepare order data to send to backend
    const orderItems = cart.map((item) => ({
      product: item._id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    const orderData = {
      orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice: calculateTotal(),
    };

    // If user selected Visa or PayPal, add payment details to order data
    if (paymentMethod === 'Visa' || paymentMethod === 'PayPal') {
      orderData.paymentDetails = paymentDetails;
    }

    try {
      // Send POST request to backend API to create the order
      const response = await axios.post(
        'http://localhost:5000/api/orders', // Backend endpoint
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle the response after successful order
      if (response.status === 201) {
        // Clear cart after order is confirmed
        localStorage.removeItem('cart');
        alert('Order confirmed!');
        navigate('/');  // Redirect to home page
      }
    } catch (error) {
      console.error('Error confirming order:', error);
      alert('Error confirming order');
    }
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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <StyledCard>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px', fontWeight: '600' }}>
          Checkout
        </Typography>
        <Grid container spacing={3}>
          {cart.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Card sx={{ padding: '10px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: '600' }}>{item.name}</Typography>
                  <Typography variant="body2">${item.price}</Typography>
                  <Typography variant="body2">Quantity: {item.quantity}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" sx={{ marginTop: 4 }}>Total: ${calculateTotal()}</Typography>

        {/* Payment Method Selection */}
        <FormControl component="fieldset" sx={{ marginTop: 2 }}>
          <FormLabel component="legend">Payment Method</FormLabel>
          <RadioGroup
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            row
          >
            <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery" />
            <FormControlLabel value="Visa" control={<Radio />} label="Visa" />
            <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
          </RadioGroup>
        </FormControl>

        {/* Show payment details input fields if Visa or PayPal is selected */}
        {(paymentMethod === 'Visa' || paymentMethod === 'PayPal') && (
          <>
            <TextField
              label="Card Number"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentDetailsChange}
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Expiry Date"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handlePaymentDetailsChange}
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="CVV"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handlePaymentDetailsChange}
              fullWidth
              sx={{ marginTop: 2 }}
            />
          </>
        )}

        {/* Shipping Address */}
        <Typography variant="h6" sx={{ marginTop: 4 }}>Shipping Address</Typography>
        <TextField
          label="Address"
          name="address"
          value={shippingAddress.address}
          onChange={handleShippingAddressChange}
          fullWidth
          sx={{ marginTop: 2 }}
        />
        <TextField
          label="City"
          name="city"
          value={shippingAddress.city}
          onChange={handleShippingAddressChange}
          fullWidth
          sx={{ marginTop: 2 }}
        />
        <TextField
          label="Postal Code"
          name="postalCode"
          value={shippingAddress.postalCode}
          onChange={handleShippingAddressChange}
          fullWidth
          sx={{ marginTop: 2 }}
        />
        <TextField
          label="Country"
          name="country"
          value={shippingAddress.country}
          onChange={handleShippingAddressChange}
          fullWidth
          sx={{ marginTop: 2 }}
        />

        {/* Confirm Order Button */}
        <StyledButton variant="contained" color="primary" onClick={handleConfirmOrder} sx={{ marginTop: 4 }}>
          Confirm Order
        </StyledButton>
      </StyledCard>
    </Box>
  );
};

export default Checkout;
