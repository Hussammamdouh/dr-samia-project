import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Privacy Policy
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          1. Introduction
        </Typography>
        <Typography paragraph>
          At our supermarket e-commerce store, we respect and protect your privacy. This privacy policy
          outlines how we collect, use, and protect your personal data.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          2. Information We Collect
        </Typography>
        <Typography paragraph>
          We collect personal information such as your name, address, email, phone number, and payment
          details when you place an order. We also collect browsing data and cookies to improve user experience.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          3. How We Use Your Information
        </Typography>
        <Typography paragraph>
          We use your information to process orders, improve our services, personalize content, and
          communicate with you about promotions and updates.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          4. Sharing Your Information
        </Typography>
        <Typography paragraph>
          We do not share your personal information with third parties, except to process payments or
          fulfill orders. We ensure that all partners comply with our privacy standards.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          5. Security of Your Data
        </Typography>
        <Typography paragraph>
          We implement strict security measures to protect your personal data, including encryption and
          secure payment gateways.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          6. Cookies
        </Typography>
        <Typography paragraph>
          Our website uses cookies to enhance your browsing experience. You can disable cookies in your
          browser settings, but this may affect your user experience.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          7. Your Rights
        </Typography>
        <Typography paragraph>
          You have the right to access, correct, and delete your personal data. Please contact us if you
          wish to exercise these rights.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" align="center">
          Last updated: October 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
