"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import React, { useEffect, useState } from "react";
import ConfirmationModal from "@/components/ConfirmationBox";
import { meals } from "@/api/member-api/MemberApi";
import { Meal, resMeals } from "@/api/member-api/MemberResType";


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
        marginLeft: "40px",
      }}
    >
      {meal.map((meal) => (
        <MealCard meal={meal} key={meal.id} setOpenModal={setOpenModal} />
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
  );
};


interface MealCardProp {
  meal: Meal;
  setOpenModal: (modalParam: boolean) => void;
}

const MealCard = ({ meal, setOpenModal }: MealCardProp) => {
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
          {meal.name.slice(0, 20) + "..."}
        </Typography>
        <Typography variant="body2">{meal.ingredients.slice(0, 40) + "..."}</Typography>
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
          onClick={() => setOpenModal(true)}
        >
          Order Now
        </Button>
        <Box>
          <IconButton aria-label="favourite">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="save">
            <BookmarkBorderIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};
export default Meals;
