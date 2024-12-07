import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Terms and Conditions
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          1. Introduction
        </Typography>
        <Typography paragraph>
          Welcome to our online store, your trusted source for premium supermarket goods. By accessing
          and using our website, you agree to be bound by the following Terms and Conditions. Please read
          them carefully.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          2. Acceptance of Terms
        </Typography>
        <Typography paragraph>
          By using our site, you acknowledge that you have read, understood, and agree to be legally bound
          by these terms and conditions. If you disagree with any part of the terms, you must immediately
          discontinue using the website.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          3. Products and Pricing
        </Typography>
        <Typography paragraph>
          All products displayed on our website are subject to availability. Prices are subject to change
          without notice. We strive to provide accurate pricing information, but errors may occur.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          4. Ordering and Payment
        </Typography>
        <Typography paragraph>
          When you place an order, you agree to provide accurate and complete information. Payments are
          processed securely through our payment gateway.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          5. Shipping and Returns
        </Typography>
        <Typography paragraph>
          We offer standard shipping services. If you are not satisfied with your purchase, we have a
          return policy in place that you can refer to on our Returns page.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          6. Limitation of Liability
        </Typography>
        <Typography paragraph>
          We are not liable for any damages or losses arising from the use of our website, including
          indirect, incidental, or punitive damages.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" align="center">
          Last updated: October 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
