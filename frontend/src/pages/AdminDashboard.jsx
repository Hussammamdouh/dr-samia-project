import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/orders')
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load orders');
        setLoading(false);
      });
  }, []);

  const handleStatusUpdate = (orderId, newStatus) => {
    // Handle status update logic here
    console.log('Updated status for order', orderId, 'to', newStatus);
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
    <Grid container spacing={3}>
      {orders.map((order) => (
        <Grid item xs={12} sm={6} md={4} key={order._id}>
          <Card>
            <CardContent>
              <Typography variant="h6">Order ID: {order._id}</Typography>
              <Typography variant="body2">Customer: {order.user.name}</Typography>
              <Typography variant="body2">Total: ${order.totalPrice}</Typography>
              <Typography variant="body2">Status: {order.status}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleStatusUpdate(order._id, 'Shipped')}
                sx={{ marginTop: 2 }}
              >
                Mark as Shipped
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AdminDashboard;
