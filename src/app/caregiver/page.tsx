"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ConfirmationModal from "@/components/ConfirmationBox";
import { useRouter } from "next/navigation";
import { Meal, resMeals } from "@/api/member-api/MemberResType";
import { meals } from "@/api/care-giver-api/CareGiverApi";




const Meals = () => {

  const [meal, setMeal] = useState<Meal[]>([]);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
        console.error("Token not found in session storage");
        return;
    }
    const fetchMeals = async () => {
        try {
            const response: resMeals = await meals(token);
            setMeal(response.data.data); 
            console.log("data from fetching", response.data.data); 
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    };

    fetchMeals();
  }, []);


  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Stack>
      <Typography variant="h4" paddingY={2} align="center">
        Menu Management
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: {
            xs: "1.5rem",
            md: "2rem 5rem",
          },
          marginLeft: "55px",
        }}
      >
        {meal.map((meal) => (
          <MealCard meal={meal} key={meal.id} mealId={meal.id}/>
        ))}

        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ConfirmationModal
            open={openModal}
            message="Are you sure you want to order this meal?"
            title="Confirm Order"
            onConfirm={() => setOpenModal(false)}
            ConfirmTitle="Order"
            onCancel={() => setOpenModal(false)}
          />
        </Modal>
      </Stack>
    </Stack>
  );
};

interface MealCardProp {
  mealId : number;
  meal: Meal;
}

const MealCard = ({mealId, meal }: MealCardProp) => {

    const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 340,
        cursor: "pointer",
        transition: "transform 0.4s ease-in-out 0.4s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia sx={{ height: 160 }} image={meal.image} title={meal.name} />
      <CardContent>
        <Typography variant="h5" marginBottom="10px">
          {meal.ingredients.slice(0, 20) + "..."}
        </Typography>
        <Typography variant="body2">{meal.nutritional_information}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "15px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ marginBottom: 1 }}
          onClick={() => router.push(`/care-giver/${mealId}/update-meal`)}
        >
          Update
        </Button>
      </CardActions>
    </Card>
  );
};
export default Meals;
