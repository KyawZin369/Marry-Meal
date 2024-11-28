'use client'

import { Button, Stack, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";


export default function Role() {

    const router = useRouter();

    return (
        <Box
            sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                boxShadow: 3,
                padding: 3,
                width: "100%",
                maxWidth: 400,
                margin: "auto",
                marginTop: 4
            }}
        >
            {/* Back Button */}
            <Button
                variant="text"
                startIcon={<ArrowBackIcon />}
                sx={{
                    alignSelf: "flex-start",
                    marginBottom: 2,
                    color: "#1976d2",
                    "&:hover": {
                        color: "#1565c0",
                    },
                }}
                onClick={() => router.push("/")}
            >
                Back
            </Button>

            <Stack
                spacing={2}
                sx={{
                    textAlign: "center",
                    marginBottom: "20px"
                }}
            >
                {/* Title */}
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        marginBottom: 2,
                        fontWeight: "bold",
                        color: "#333",
                    }}
                >
                    Select Your Role
                </Typography>

                {/* Role Buttons */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        fontSize: "1rem",
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        backgroundColor: "green",
                        fontWeight: "bold",
                        marginTop: "10px",
                        "&:hover": {
                            backgroundColor: "#2c6e1f",
                        },
                    }}
                    onClick={() => {
                        router.push("/register?role=Member");
                    }}
                >
                    Member
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        fontSize: "1rem",
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        backgroundColor: "green",
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: "#2c6e1f",
                        },
                    }}
                    onClick={() => {
                        router.push("/register?role=Care giver");
                    }}
                >
                    Care Giver
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        fontSize: "1rem",
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        fontWeight: "bold",
                        backgroundColor: "green",
                        "&:hover": {
                            backgroundColor: "#2c6e1f",
                        },
                    }}
                    onClick={() => {
                        router.push("/register?role=Supporter");
                    }}
                >
                    Donator / Supporter
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        fontSize: "1rem",
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        fontWeight: "bold",
                        backgroundColor: "green",
                        "&:hover": {
                            backgroundColor: "#2c6e1f",
                        },
                    }}
                    onClick={() => {
                        router.push("/register?role=Volunteer");
                    }}
                >
                    Volunteer
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        fontSize: "1rem",
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        fontWeight: "bold",
                        backgroundColor: "green",
                        "&:hover": {
                            backgroundColor: "#2c6e1f",
                        },
                    }}
                    onClick={() => {
                        router.push("/register?role=Partner");
                    }}
                >
                    Partner
                </Button>
            </Stack>
        </Box>
    );
}
