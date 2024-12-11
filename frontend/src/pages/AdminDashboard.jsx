import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, Grid, Card, CardContent, CardActions } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { MdPendingActions, MdCheckCircle, MdPayment } from 'react-icons/md';

// Styled Components for Card and Button
const StyledCard = styled(Card)({
  padding: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  marginBottom: '20px',
});

const StatsCard = styled(Card)({
  padding: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  textAlign: 'center',
  marginBottom: '20px',
  backgroundColor: '#ff5722', // Orange background for stats cards
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
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
  transition: 'background-color 0.3s ease',
});

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    pendingOrders: 0,
    shippedOrders: 0,
    totalOrders: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is an admin
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }

    axios
      .get('http://localhost:5000/api/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
        calculateStats(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load orders');
        setLoading(false);
      });
  }, [navigate]);

  const calculateStats = (orders) => {
    let totalRevenue = 0;
    let pendingOrders = 0;
    let shippedOrders = 0;

    orders.forEach((order) => {
      totalRevenue += order.totalPrice;
      if (order.orderStatus === 'Pending') {
        pendingOrders++;
      }
      if (order.orderStatus === 'Shipped') {
        shippedOrders++;
      }
    });

    setStats({
      totalRevenue: totalRevenue.toFixed(2),
      pendingOrders,
      shippedOrders,
      totalOrders: orders.length,
    });
  };

  const handleStatusUpdate = async (orderId, newStatus) => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${orderId}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders(orders.map(order =>
        order._id === orderId ? { ...order, orderStatus: newStatus } : order
      ));
    } catch (err) {
      console.error('Error updating status:', err);
    }
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
    <Box sx={{ padding: '20px' }}>
      {/* Stats Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <MdPayment size={40} />
            <Typography variant="h5">Total Revenue</Typography>
            <Typography variant="h6">${stats.totalRevenue}</Typography>
          </StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <MdPendingActions size={40} />
            <Typography variant="h5">Pending Orders</Typography>
            <Typography variant="h6">{stats.pendingOrders}</Typography>
          </StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <MdCheckCircle size={40} />
            <Typography variant="h5">Shipped Orders</Typography>
            <Typography variant="h6">{stats.shippedOrders}</Typography>
          </StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <Typography variant="h5">Total Orders</Typography>
            <Typography variant="h6">{stats.totalOrders}</Typography>
          </StatsCard>
        </Grid>
      </Grid>

      {/* Orders List Section */}
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} sm={6} md={4} key={order._id}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">Order ID: {order._id}</Typography>
                <Typography variant="body2">Customer: {order.user.name}</Typography>
                <Typography variant="body2">Total: ${order.totalPrice}</Typography>
                <Typography variant="body2">Status: {order.orderStatus}</Typography>
              </CardContent>
              <CardActions>
                <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={() => handleStatusUpdate(order._id, 'Shipped')}
                >
                  Mark as Shipped
                </StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
