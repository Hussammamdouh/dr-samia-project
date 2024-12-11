import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

const TermsAndConditions = () => {
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
          Terms and Conditions
        </Typography>

        {/* Introduction */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          1. Introduction
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          Welcome to our online store, your trusted source for premium supermarket goods. By accessing
          and using our website, you agree to be bound by the following Terms and Conditions. Please read
          them carefully.
        </Typography>

        {/* Acceptance of Terms */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          2. Acceptance of Terms
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          By using our site, you acknowledge that you have read, understood, and agree to be legally bound
          by these terms and conditions. If you disagree with any part of the terms, you must immediately
          discontinue using the website.
        </Typography>

        {/* Products and Pricing */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          3. Products and Pricing
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          All products displayed on our website are subject to availability. Prices are subject to change
          without notice. We strive to provide accurate pricing information, but errors may occur.
        </Typography>

        {/* Ordering and Payment */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          4. Ordering and Payment
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          When you place an order, you agree to provide accurate and complete information. Payments are
          processed securely through our payment gateway.
        </Typography>

        {/* Shipping and Returns */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          5. Shipping and Returns
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          We offer standard shipping services. If you are not satisfied with your purchase, we have a
          return policy in place that you can refer to on our Returns page.
        </Typography>

        {/* Limitation of Liability */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#444" }}>
          6. Limitation of Liability
        </Typography>
        <Typography paragraph sx={{ color: "#555", lineHeight: 1.8 }}>
          We are not liable for any damages or losses arising from the use of our website, including
          indirect, incidental, or punitive damages.
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 4, bgcolor: "#ddd" }} />

        {/* Last Updated Information */}
        <Typography variant="body2" align="center" sx={{ color: "#555" }}>
          Last updated: October 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
