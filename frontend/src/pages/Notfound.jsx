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
        bgcolor: "#f9f9f9",
        p: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "4rem", sm: "6rem" },
          fontWeight: "bold",
          color: "#3f51b5",
          mb: 2,
        }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#757575",
          mb: 4,
        }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ textTransform: "none" }}
        onClick={() => navigate("/")}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
