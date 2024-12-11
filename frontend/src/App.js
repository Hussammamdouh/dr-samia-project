import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginAdmin from './pages/LoginAdmin';  // Admin login page
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';
import Devs from './pages/Devs';
import NotFoundPage from './pages/Notfound';
import AboutUs from './pages/About';
import PrivacyPolicy from './pages/PP';
import TermsAndConditions from './pages/T&C'
import Pricing from './pages/Pricing'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './services/PrivateRoutes';  // Import PrivateRoute
import LoginUser from './pages/Login';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFoundPage />} />
        
        {/* Normal user and admin login routes */}
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/login-admin" element={<LoginAdmin />} />

        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Developers" element={<Devs />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Terms-and-Conditions" element={<TermsAndConditions />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/Profile" element={<Profile/>}/>

        {/* Protected Routes */}
        <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
