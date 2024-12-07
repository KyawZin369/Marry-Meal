'use client';

import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';

type DonationFormType = {
    cardNumber: string
    cardHolder: string
    expirationDate: string
    cvv: string
    amount: string
}
const Page = () => {
    const { control, handleSubmit } = useForm<DonationFormType>({
        defaultValues: {
            cardNumber: "",
            cardHolder: "",
            expirationDate: "",
            cvv: "",
            amount: "",
        }
    })

    const onSubmit = (data: DonationFormType) => {
        console.log(data);
    }
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            sx={{ background: "linear-gradient(to right, #ece9e6, #ffffff)" }}
        >
            <Box
                sx={{
                    maxWidth: 600,
                    width: "75%",
                    p: 4,
                    boxShadow: 6,
                    borderRadius: 4,
                    backgroundColor: "#ffffff",
                    margin: "30px 0px"
                }}
            >
                <Box display="flex" justifyContent="center" mb={3}>
                    <Image
                        src="/image/carelogo.png"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </Box>
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontWeight="bold"
                    color="primary"
                    gutterBottom
                >
                    Registration
                </Typography>
                <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="textSecondary"
                    mb={4}
                >
                    Fill in the details below to create your account.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <Controller
                            name="cardNumber"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Card Number"
                                    placeholder="1234 5678 9012 3456"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    inputProps={{ maxLength: 19 }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                        },
                                        mb: 3
                                    }}
                                    onChange={(e) => {
                                        // Remove non-numeric characters
                                        let value = e.target.value.replace(/\D/g, "");

                                        // Restrict to 16 digits
                                        if (value.length > 16) value = value.slice(0, 16);

                                        // Add space formatting every 4 digits
                                        // Adds space after every 4 digits
                                        field.onChange(
                                            value.replace(/(\d{4})(?=\d)/g, "$1 ")
                                        );
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="cardHolder"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Card Holder Name"
                                    placeholder="John Doe"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                        },
                                        mb: 3
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="expirationDate"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Expiration Date"
                                    placeholder="MM/YY"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    inputProps={{ maxLength: 5 }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                        },
                                        mb: 3
                                    }}
                                    onChange={(e) => {
                                        // Remove non-numeric characters
                                        let value = e.target.value.replace(/\D/g, "");

                                        // Restrict to 4 digits
                                        if (value.length > 4) value = value.slice(0, 4);

                                        // Insert a forward slash after the first two digits for MM/YY format
                                        if (value.length > 2) {
                                            value = `${value.slice(0, 2)}/${value.slice(2)}`;
                                        }
                                        field.onChange(value);
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="cvv"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="CVV"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                        },
                                        mb: 3
                                    }}
                                    inputProps={{ maxLength: 4 }}
                                    onChange={(e) => {
                                        // Remove any non-numeric characters
                                        const value = e.target.value.replace(/\D/g, "");

                                        // Update the field value
                                        field.onChange(value);
                                    }}
                                />
                            )}
                        />

                        <Box sx={{ mb: 3 }}>
                            <FormControl fullWidth required>
                                <InputLabel>Amount</InputLabel>
                                <Controller
                                    name="amount"
                                    control={control}
                                    render={({ field }) => (
                                        <Select {...field} label="Amount" sx={{ borderRadius: 2 }}>
                                            <MenuItem value="10">$ 10</MenuItem>
                                            <MenuItem value="15">$ 15</MenuItem>
                                            <MenuItem value="20">$ 20</MenuItem>
                                            <MenuItem value="25">$ 25</MenuItem>
                                            <MenuItem value="50">$ 50</MenuItem>
                                            <MenuItem value="100">$ 100</MenuItem>
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                padding: "12px",
                                borderRadius: 2,
                                "&:hover": {
                                    backgroundColor: "#3f51b5",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </Stack>
    )
}

export default Page