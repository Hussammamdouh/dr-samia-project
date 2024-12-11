import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Box, IconButton, Drawer, List, ListItem, ListItemText, Modal, Fade, Backdrop } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { MdSearch, MdAccountCircle, MdExitToApp, MdMenu } from 'react-icons/md';  // Icons for search, user, logout, menu

// Styled Components for Navbar and Search Bar
const StyledSearch = styled(TextField)({
  backgroundColor: '#fff',  // White background for search bar
  borderRadius: '12px',
  width: '250px',
  '& .MuiInputBase-root': {
    borderRadius: '12px',
    padding: '10px',
  },
});

const NavbarButton = styled(Button)({
  color: '#fff',
  borderRadius: '8px',
  marginLeft: '15px',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#e64a19',  // Darker orange on hover
  },
  transition: 'background-color 0.3s ease',
});

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      const userData = JSON.parse(localStorage.getItem('user'));  // Assuming user data is saved in localStorage
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer Menu for Mobile/Tablet View
  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/login-user">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/register">
          <ListItemText primary="Register" />
        </ListItem>
        <ListItem button component={Link} to="/cart">
          <ListItemText primary="Cart" />
        </ListItem>
        {user && (
          <>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        )}
        <ListItem button onClick={() => setSearchModalOpen(true)}>
          <ListItemText primary="Search" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ff5722' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Name - Link to Home Page */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Market</Link>
        </Typography>

        {/* Search Bar (centered) for Desktop */}
        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', justifyContent: 'center', width: '100%', display: { xs: 'none', sm: 'flex' } }}>
          <StyledSearch
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: <MdSearch style={{ marginLeft: '10px', color: '#ff5722' }} />,
            }}
          />
        </Box>

        {/* Desktop View Buttons */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {user ? (
            <>
              <Typography variant="body1" sx={{ marginLeft: 2, color: '#fff' }}>
                Hello, {user.firstName}
              </Typography>
              <NavbarButton
                color="inherit"
                startIcon={<MdAccountCircle />}
                component={Link}
                to="/profile"
              >
                Profile
              </NavbarButton>
              <NavbarButton
                color="inherit"
                startIcon={<MdExitToApp />}
                onClick={handleLogout}
              >
                Logout
              </NavbarButton>
            </>
          ) : (
            <>
              <NavbarButton color="inherit" component={Link} to="/login-user">Login</NavbarButton>
              <NavbarButton color="inherit" component={Link} to="/register">Register</NavbarButton>
            </>
          )}

          {/* Cart Link */}
          <NavbarButton color="inherit" component={Link} to="/cart">
            Cart
          </NavbarButton>
        </Box>

        {/* Mobile/Tablet View - Burger Menu */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: 'block', sm: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MdMenu />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile/Tablet */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      {/* Search Modal for Mobile */}
      <Modal
        open={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={searchModalOpen}>
          <Box sx={{
            position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: 4, boxShadow: 24, borderRadius: 2, width: '80%'
          }}>
            <Typography variant="h6">Search Products</Typography>
            <TextField
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter product name..."
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                color="primary"
                onClick={handleSearch}
                variant="contained"
                sx={{ marginRight: 2 }}
              >
                Search
              </Button>
              <Button
                onClick={() => setSearchModalOpen(false)}
                variant="outlined"
              >
                Close
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </AppBar>
  );
};

export default Navbar;
