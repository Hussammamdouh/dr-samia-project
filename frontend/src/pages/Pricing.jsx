import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$9.99/month",
      features: ["Feature A", "Feature B", "Feature C"],
      buttonText: "Choose Basic",
    },
    {
      title: "Pro Plan",
      price: "$19.99/month",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"],
      buttonText: "Choose Pro",
    },
    {
      title: "Premium Plan",
      price: "$29.99/month",
      features: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Feature D",
        "Feature E",
      ],
      buttonText: "Choose Premium",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f4f6f8", py: 6 }}>
      {/* Page Header */}
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Choose Your Plan
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
        Select the best plan that suits your needs.
      </Typography>

      {/* Pricing Cards */}
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 2, color: "#3f51b5" }}
                >
                  {plan.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                  {plan.price}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  Billed monthly. Cancel anytime.
                </Typography>

                {/* Features List */}
                <Box>
                  {plan.features.map((feature, idx) => (
                    <Typography
                      key={idx}
                      variant="body1"
                      sx={{
                        mb: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      - {feature}
                    </Typography>
                  ))}
                </Box>

                {/* Choose Plan Button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 4,
                    px: 4,
                    fontWeight: "bold",
                    borderRadius: "20px",
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;