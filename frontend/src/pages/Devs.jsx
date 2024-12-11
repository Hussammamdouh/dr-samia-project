import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider,
} from "@mui/material";

const developers = [
  {
    name: "Ahmed Selim",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mina Magdy",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Hussam Mamdouh",
    role: "FullStack Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ali Abdelnasser",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mohamed Ahmed",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ahmed Mostafa",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Adel Khalil",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mahmoud Sabry",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
  },
];

const Devs = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f4f6f8" }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold", mb: 4, color: "#333" }}
      >
        Meet the Developers
      </Typography>

      {/* Developers Grid */}
      <Grid container spacing={4}>
        {developers.map((developer, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                mx: "auto",
                boxShadow: 3,
                borderRadius: 2,
                transition: "0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Developer Image */}
              <CardMedia
                component="img"
                alt={developer.name}
                height="200"
                image={developer.image}
                sx={{
                  objectFit: "cover",
                  borderRadius: "50%", // Round the image
                  marginTop: 3,
                  mx: "auto",
                  width: "80%",
                }}
              />

              <CardContent>
                {/* Developer Name */}
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    marginTop: 2,
                  }}
                >
                  {developer.name}
                </Typography>

                {/* Developer Role */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ fontStyle: "italic", marginBottom: 2 }}
                >
                  {developer.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, bgcolor: "#ddd" }} />

      {/* Footer Text */}
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "#555",
          fontSize: "14px",
        }}
      >
        Our team is committed to creating the best experience for you.
      </Typography>
    </Box>
  );
};

export default Devs;
