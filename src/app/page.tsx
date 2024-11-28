import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import "../app/globals.css";

// app/page.tsx (Home Page)
export default function Home() {
    return (
        // The container in column direction holding two sections
        <Stack
            direction="column"
            sx={{
                padding: {
                    xs: "0",
                    md: "0 10vw"
                }
            }}
        >

            <Typography variant='h3' textAlign='center' padding='3rem 1.2rem'>
                Welcome to Merry Meal
            </Typography>
            {/* The first section */}
            <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: {
                        xs: "1.5rem",
                        md: "2rem 5rem"
                    }
                }}
            >
                {/* Image container */}
                <Box
                    sx={{
                        flexBasis: "40%",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Image
                        src={"/download.jpg"}
                        height={240}
                        width={300}
                        alt="photo"
                        style={{ borderRadius: "16px" }}
                    />
                </Box>

                {/* Paragraph Container - Title, Paragraph, Button*/}
                <Box
                    sx={{
                        flexBasis: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant='h4' paddingY={2}>
                        Volunteer
                    </Typography>
                    <Typography
                        variant='body1'
                        paragraph
                        sx={{
                            textAlign: "center"
                        }}
                    >
                        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;
                    </Typography>
                    <Button variant='contained' sx={{ marginTop: 1 }}>
                        Sign Up
                    </Button>
                </Box>
            </Stack>

            {/* The second section */}
            <Stack
                direction={{ xs: "column-reverse", md: "row" }}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: {
                        xs: "1.5rem",
                        md: "2rem 5rem"
                    }
                }}
            >
                {/* Paragraph Container - Title, Paragraph, Button*/}
                <Box
                    sx={{
                        flexBasis: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant='h4' paddingY={2}>
                        Partner
                    </Typography>
                    <Typography
                        variant='body1'
                        paragraph
                        sx={{
                            textAlign: "center"
                        }}
                    >
                        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;
                    </Typography>
                    <Button variant='contained' sx={{ marginTop: 1 }}>
                        Sign Up
                    </Button>
                </Box>

                {/* Image container */}
                <Box
                    sx={{
                        flexBasis: "40%",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Image
                        src={"/download.jpg"}
                        height={240}
                        width={300}
                        alt="photo"
                        style={{ borderRadius: "16px" }}
                    />
                </Box>
            </Stack>
        </Stack>
    );
}
