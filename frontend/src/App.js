import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/*' element={<NotFoundPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/Developers' element={<Devs />} />
        <Route path='/About' element={<AboutUs />}/>
        <Route path='/Pricing' element={<Pricing />}/>
        <Route path='/Term-and-Conditions' element={<TermsAndConditions />}/>
        <Route path='/Privacy-Policy' element={<PrivacyPolicy/>}/>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
