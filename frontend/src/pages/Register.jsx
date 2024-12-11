import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

// Custom Styled Components for Button and TextField
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

const StyledTextField = styled(TextField)({
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
  marginBottom: '20px',
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ff5722', // Focus border color (match button color)
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: '#ff5722', // Focus label color
  },
  transition: 'all 0.3s ease', // Smooth transition on focus
});

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });
      navigate('/login-user'); // Redirect to login page after successful registration
    } catch (err) {
      setError('Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Box sx={{
      maxWidth: 400,
      margin: 'auto',
      padding: 3,
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      '@media (max-width:600px)': {
        padding: '20px', // Reduce padding on mobile
      },
    }}>
      <Typography variant="h5" gutterBottom sx={{
        fontWeight: '600', fontFamily: 'Poppins', textAlign: 'center', marginBottom: '20px',
      }}>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(null); // Clear error when typing
          }}
        />
        <StyledTextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null); // Clear error when typing
          }}
        />
        <StyledTextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null); // Clear error when typing
          }}
        />
        {error && (
          <Typography variant="body2" color="error" sx={{ marginBottom: '10px', textAlign: 'center' }}>
            {error}
          </Typography>
        )}
        <StyledButton
          type="submit"
          variant="contained"
          sx={{ marginTop: '16px' }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
        </StyledButton>
      </form>
    </Box>
  );
};

export default Register;
