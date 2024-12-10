"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Button,
  Paper,
  TextField,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import type { NextPage } from "next";
import { ProfileApiRes } from "@/api/profile-api/ProfileApiRes";
import { ProfileList } from "@/api/profile-api/ProfileApi";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: "20px auto",
  maxWidth: 600,
  borderRadius: theme.spacing(2),
}));

const AdminProfilePage: NextPage = () => {
  const [profile, setProfile] = useState<ProfileApiRes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      console.error("Token not found in session storage");
      return;
    }
    const fetchProfile = async () => {
      try {
        const res: ProfileApiRes = await ProfileList(token);
        setProfile(res);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false); // Stop loading even if an error occurs
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", p: 2 }}>
      <ProfilePaper>
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
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar
            src="/placeholder-profile.png"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography variant="h5" gutterBottom>
            {profile?.data.user_name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {profile?.data.address}
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              value={profile?.data.user_name || ""}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              value={profile?.data.user.email || ""}
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              value={`+95 ${profile?.data.phone_number || ""}`}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              value={profile?.data.address || ""}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" size="large">
            Save Changes
          </Button>
        </Box>
      </ProfilePaper>
    </Box>
  );
};

export default AdminProfilePage;
