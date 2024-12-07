import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
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
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Meet the Developers
      </Typography>
      <Grid container spacing={4}>
        {developers.map((developer, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                mx: "auto",
                boxShadow: 3,
                "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
              }}
            >
              <CardMedia
                component="img"
                alt={developer.name}
                height="150"
                image={developer.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  {developer.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  {developer.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Devs;
