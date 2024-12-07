import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, Divider } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
          About Us
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Welcome to our online supermarket! We are a leading e-commerce platform specializing in high-quality
          groceries, household items, and premium supermarket products. Our mission is to provide you with a seamless
          shopping experience from the comfort of your home.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }}>
          We partner with trusted suppliers and brands to bring you the freshest, most affordable products available.
          Whether you need everyday groceries, organic options, or international goods, we have it all.
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  To make grocery shopping simple, convenient, and affordable for everyone.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  To revolutionize online grocery shopping by offering the best customer service, product variety, and
                  ease of access.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Values
                </Typography>
                <Typography variant="body1">
                  We are committed to customer satisfaction, transparency, sustainability, and providing high-quality
                  products at affordable prices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" align="center">
          Last updated: October 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs;
