"use client";

import React from 'react';
import { Button, Typography, Box, Paper, ThemeProvider, createTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { logout } from '@/api/logout-api/logoutApi';

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#ff4081', // Pink color
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
  },
});


const Logout: React.FC = () => {

  const router = useRouter();

  const handleLogout = async() => {

    await logout();

    router.push("/")
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{
          background: 'linear-gradient(135deg, #1976d2, #ff4081)',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 3,
            textAlign: 'center',
            maxWidth: 400,
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
            Log Out
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3, color: '#555' }}>
            Are you sure you want to log out? You will need to sign in again to access your account.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginBottom: 2,
              padding: '12px 16px',
              fontSize: '1rem',
              fontWeight: 600,
            }}
            onClick={handleLogout}
          >
            Yes, Log Out
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{
              padding: '12px 16px',
              fontSize: '1rem',
              fontWeight: 600,
            }}
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Logout;
