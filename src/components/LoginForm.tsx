"use client";

import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import { LoginFormValues } from "@/api/login-api/LoginType";
import { login } from "@/api/login-api/LoginApi";


export default function LoginPage() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Form Data Submitted: ", data);
  
    if(data){
      try {
        const result = await login(data);

        console.log("Result: ", result);
    
        if (result && result.token) {
    
          sessionStorage.setItem("authToken", result.token);

          const userType = result.user.type;

          if(userType) {
            router.push(`/${userType}`);
          }
    
        } else {
          console.error("Login failed: Invalid response");
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };
  
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
          width: "100%",
          p: 4,
          boxShadow: 6,
          borderRadius: 4,
          backgroundColor: "#ffffff",
          margin: "30px 0px",
        }}
      >
        <Box display="flex" justifyContent="center" mb={3}>
          <Image src="/image/carelogo.png" alt="logo" width={100} height={100} />
        </Box>

        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Login
        </Typography>

        <Typography
          variant="subtitle1"
          textAlign="center"
          color="textSecondary"
          mb={4}
        >
          Please enter your login details.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              )}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
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
              Login
            </Button>
          </Box>

          <Typography textAlign="center" color="textSecondary">
            Don’t have an account?{" "}
            <Button
              variant="text"
              color="primary"
              onClick={() => router.push("/role")}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Register here
            </Button>
          </Typography>
        </form>
      </Box>
    </Stack>
  );
}
