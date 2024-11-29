import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'

type Meal = {
    id: number
    title: string
    description: string
    price: number
    image: string
}
const meals: Meal[] = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta with creamy egg sauce, crispy pancetta, and Parmesan cheese.",
        price: 12.99,
        image: "https://marleyspoon.com/media/recipes/392597/main_photos/large/creamy_carbonara_with_spaghetti-728518fc7780c4fca376270ae0817ab4.jpeg"
    },
    {
        id: 2,
        title: "Margherita Pizza",
        description: "Wood-fired pizza topped with fresh mozzarella, basil, and tomato sauce.",
        price: 10.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrbTTHEWbbBedX4fTp25-0ZUisd_HT1jK6Q&s"
    },
    {
        id: 3,
        title: "Caesar Salad",
        description: "Crisp romaine lettuce, croutons, and Caesar dressing with a sprinkle of Parmesan cheese.",
        price: 8.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9Uh04RzJaKdOJtnFR6Unnv5qlKe4tmAfOQ&s"
    },
    {
        id: 4,
        title: "Grilled Salmon",
        description: "Freshly grilled salmon fillet served with lemon butter sauce and seasonal vegetables.",
        price: 15.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRselIznoijy1jIf1_klBW6iU6kpXZNOHwCCg&s"
    },
    {
        id: 5,
        title: "Chicken Alfredo",
        description: "Fettuccine pasta with creamy Alfredo sauce and grilled chicken breast.",
        price: 13.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMJjGh0PGORQonNBIIbo6FH6X9WceIbNi0w&s"
    },
    {
        id: 6,
        title: "Vegetable Stir-Fry",
        description: "Assorted fresh vegetables stir-fried in a savory soy and garlic sauce.",
        price: 9.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiphrNcjfvL_UgvwWdgU6GdmJzN-6qV7MleA&s"
    },
    {
        id: 7,
        title: "Beef Tacos",
        description: "Three soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
        price: 11.99,
        image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg"
    },
    {
        id: 8,
        title: "Seafood Paella",
        description: "Spanish rice dish with shrimp, mussels, squid, and saffron-infused rice.",
        price: 16.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYgWvuU8dhnJOA5cV1424EHanSvDpCqGFOw&s"
    },
    {
        id: 9,
        title: "Mushroom Risotto",
        description: "Creamy risotto with sautéed mushrooms and a hint of truffle oil.",
        price: 14.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UcnrX7s33U9sv3tsJ21FQJsjA3AoyGvbQw&s"
    },
    {
        id: 10,
        title: "Lamb Chops",
        description: "Herb-crusted lamb chops served with mint sauce and roasted potatoes.",
        price: 19.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGndyRawl3PhvjUwuGRI-ndMLgt7O78maJw&s"
    },
];

const page = () => {
    return (
        <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "2rem",
                padding: {
                    xs: "1.5rem",
                    md: "2rem 5rem"
                },
                marginLeft: "55px"
            }}
        >
            {
                meals.map((meal) => (<MealCard meal={meal} key={meal.id} />))
            }
        </Stack>

    )
}

const MealCard = ({ meal }: { meal: Meal }) => {
    return (
        <Card sx={{
            maxWidth: 340,
            cursor: "pointer",
            transition: "transform 0.4s ease-in-out 0.4s",
            '&:hover': {
                transform: "scale(1.05)",
            }
        }}>
            <CardMedia
                sx={{ height: 160 }}
                image={meal.image}
                title={meal.title}
            />
            <CardContent>
                <Typography variant='h5' marginBottom="10px">
                    {meal.title}
                </Typography>
                <Typography variant='body2'>
                    {meal.description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingX: "15px"
                }}
            >
                <Button variant='contained' size='small'>Add to Cart</Button>
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
    )
}
export default page