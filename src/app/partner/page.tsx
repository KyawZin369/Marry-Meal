"use client";

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ConfirmationModal from "@/components/ConfirmationBox";
import { Meal, resMeals } from "@/api/member-api/MemberResType";
import { meals } from "@/api/care-giver-api/CareGiverApi";

// const meals: Meal[] = [
//   {
//     id: 1,
//     title: "Spaghetti Carbonara",
//     description:
//       "Classic Italian pasta with creamy egg sauce, crispy pancetta, and Parmesan cheese.",
//     price: 12.99,
//     image:
//       "https://marleyspoon.com/media/recipes/392597/main_photos/large/creamy_carbonara_with_spaghetti-728518fc7780c4fca376270ae0817ab4.jpeg",
//   },
//   {
//     id: 2,
//     title: "Margherita Pizza",
//     description:
//       "Wood-fired pizza topped with fresh mozzarella, basil, and tomato sauce.",
//     price: 10.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrbTTHEWbbBedX4fTp25-0ZUisd_HT1jK6Q&s",
//   },
//   {
//     id: 3,
//     title: "Caesar Salad",
//     description:
//       "Crisp romaine lettuce, croutons, and Caesar dressing with a sprinkle of Parmesan cheese.",
//     price: 8.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9Uh04RzJaKdOJtnFR6Unnv5qlKe4tmAfOQ&s",
//   },
//   {
//     id: 4,
//     title: "Grilled Salmon",
//     description:
//       "Freshly grilled salmon fillet served with lemon butter sauce and seasonal vegetables.",
//     price: 15.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRselIznoijy1jIf1_klBW6iU6kpXZNOHwCCg&s",
//   },
//   {
//     id: 5,
//     title: "Chicken Alfredo",
//     description:
//       "Fettuccine pasta with creamy Alfredo sauce and grilled chicken breast.",
//     price: 13.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMJjGh0PGORQonNBIIbo6FH6X9WceIbNi0w&s",
//   },
//   {
//     id: 6,
//     title: "Vegetable Stir-Fry",
//     description:
//       "Assorted fresh vegetables stir-fried in a savory soy and garlic sauce.",
//     price: 9.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiphrNcjfvL_UgvwWdgU6GdmJzN-6qV7MleA&s",
//   },
//   {
//     id: 7,
//     title: "Beef Tacos",
//     description:
//       "Three soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
//     price: 11.99,
//     image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
//   },
//   {
//     id: 8,
//     title: "Seafood Paella",
//     description:
//       "Spanish rice dish with shrimp, mussels, squid, and saffron-infused rice.",
//     price: 16.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYgWvuU8dhnJOA5cV1424EHanSvDpCqGFOw&s",
//   },
//   {
//     id: 9,
//     title: "Mushroom Risotto",
//     description:
//       "Creamy risotto with sautéed mushrooms and a hint of truffle oil.",
//     price: 14.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UcnrX7s33U9sv3tsJ21FQJsjA3AoyGvbQw&s",
//   },
//   {
//     id: 10,
//     title: "Lamb Chops",
//     description:
//       "Herb-crusted lamb chops served with mint sauce and roasted potatoes.",
//     price: 19.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGndyRawl3PhvjUwuGRI-ndMLgt7O78maJw&s",
//   },
// ];


const Meals = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [meal, setMeal] = useState<Meal[]>([]);

  const handleConfirm = () => {
    console.log("Meal delivered:", selectedMeal);
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };


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
            console.log("Data from fetching:", response.data.data); 
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    };

    fetchMeals();
}, [meal]);


  return (
    <Stack>
      <Typography variant="h4" paddingY={2} align="center">
        Order List
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
          padding: "1.5rem",
        }}
      >
        <List>
          {meal.map((meal) => (
            <ListItem
              key={meal.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                paddingY: "1rem",
              }}
            >
              <ListItemText
                primary={meal.name}
                secondary={meal.ingredients}
                sx={{ maxWidth: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSelectedMeal(meal);
                  setOpenModal(true);
                }}
              >
                Deliver
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCancel}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ConfirmationModal
          open={openModal}
          message={`Are you sure you want to deliver "${selectedMeal?.name}"?`}
          title="Confirm Delivery"
          onConfirm={handleConfirm}
          ConfirmTitle="Yes"
          onCancel={handleCancel}
        />
      </Modal>
    </Stack>
  );
};

export default Meals;
