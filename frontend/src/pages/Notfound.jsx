import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "#f4f6f8",
        p: 2,
      }}
    >
      {/* 404 Error Typography */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "5rem", sm: "7rem", lg: "8rem" },
          fontWeight: "bold",
          color: "#ff5722", // Bright orange for 404 number
          mb: 2,
          letterSpacing: 5, // Spacing for the error text
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Shadow effect
        }}
      >
        404
      </Typography>

      {/* Error Message */}
      <Typography
        variant="h6"
        sx={{
          color: "#555",
          mb: 4,
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          fontWeight: 300,
          lineHeight: 1.6,
        }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </Typography>

      {/* Go Back Button */}
      <Button
        variant="contained"
        color="#ff5722"
        size="large"
        sx={{
          textTransform: "none",
          padding: "12px 36px",
          fontSize: "1.1rem",
          borderRadius: "30px",
          boxShadow: 4,
          "&:hover": {
            backgroundColor: "#e64a19", // Darken the color on hover
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          },
        }}
        onClick={() => navigate("/")}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
