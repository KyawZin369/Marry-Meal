"use client";
import React from "react";
import { useRouter } from "next/navigation"; 
import { Box, Typography, Card, CardMedia, CardContent, Grid, Chip, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "next/navigation";


const dummyOrder = {
  id: 11,
  name: "Grilled Chicken Salad",
  ingredients: "Chicken breast, lettuce, tomatoes, cucumbers, olive oil, vinegar",
  allergy_information: "Contains vinegar",
  nutritional_information: "500 calories, 30g protein, 20g fat, 15g carbohydrates",
  dietary_restrictions: "Gluten-free",
  price: "15.99",
  is_frozen: "0",
  delivery_status: "Pending",
  image: "",
  temperature: "Chilled",
  is_preparing: "1",
  is_finished: "0",
  is_pickup: "0",
  is_delivered: "0",
  partner_id: 12345,
  member_id: null,
  caregiver_id: 63,
  volunteer_id: null,
};

const OrderDetailPage = () => {
  const router = useRouter();
  const { id } = useParams();
  
  console.log("Dynamic ID:", id);


  const order = dummyOrder;

  const handleBack = () => {
    router.back();
  };

  return (
    <Box sx={{ p: 4 }}>
      <IconButton onClick={handleBack} sx={{ mb: 2 }}>
        <ArrowBackIcon />
      </IconButton>
      <Card>
        <Grid container spacing={2}>
          {/* Image */}
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              alt={order.name}
              height="200"
              image={order.image || "/placeholder.png"}
            />
          </Grid>

          {/* Details */}
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5">{order.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                ${order.price}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Ingredients:</strong> {order.ingredients}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Allergy Info:</strong> {order.allergy_information}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Dietary Restrictions:</strong> {order.dietary_restrictions}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Nutritional Info:</strong> {order.nutritional_information}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                <strong>Temperature:</strong> {order.temperature}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Chip
                  label={order.delivery_status}
                  color={order.delivery_status === "Pending" ? "warning" : "success"}
                />
                {order.is_preparing === "1" && (
                  <Chip label="Preparing" color="info" sx={{ ml: 1 }} />
                )}
                {order.is_finished === "1" && (
                  <Chip label="Finished" color="success" sx={{ ml: 1 }} />
                )}
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default OrderDetailPage;
