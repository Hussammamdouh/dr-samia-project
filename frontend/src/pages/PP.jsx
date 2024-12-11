import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        {/* Title Section */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "#333",
            fontSize: { xs: "2.5rem", sm: "3rem" },
          }}
        >
          Privacy Policy
        </Typography>

        {/* Introduction */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          1. Introduction
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          At our supermarket e-commerce store, we respect and protect your privacy. This privacy policy outlines how we collect, use, and protect your personal data.
        </Typography>

        {/* Information We Collect */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          2. Information We Collect
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          We collect personal information such as your name, address, email, phone number, and payment details when you place an order. We also collect browsing data and cookies to improve user experience.
        </Typography>

        {/* How We Use Your Information */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          3. How We Use Your Information
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          We use your information to process orders, improve our services, personalize content, and communicate with you about promotions and updates.
        </Typography>

        {/* Sharing Your Information */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          4. Sharing Your Information
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          We do not share your personal information with third parties, except to process payments or fulfill orders. We ensure that all partners comply with our privacy standards.
        </Typography>

        {/* Security of Your Data */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          5. Security of Your Data
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          We implement strict security measures to protect your personal data, including encryption and secure payment gateways.
        </Typography>

        {/* Cookies */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          6. Cookies
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, but this may affect your user experience.
        </Typography>

        {/* Your Rights */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          7. Your Rights
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          You have the right to access, correct, and delete your personal data. Please contact us if you wish to exercise these rights.
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 4, bgcolor: "#ddd" }} />

        {/* Last Updated Text */}
        <Typography variant="body2" align="center" sx={{ color: "#555" }}>
          Last updated: October 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
