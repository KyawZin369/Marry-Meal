"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Stack,
} from "@mui/material";

// Define the form data type
type FoodFormInputs = {
  name: string;
  ingredients: string;
  allergy_information?: string;
  nutritional_information?: string;
  dietary_restrictions?: string;
  price: number;
  is_frozen: boolean;
  delivery_status: "Pending" | "Delivered" | "Cancelled";
  is_preparing: boolean;
  is_finished: boolean;
  is_pickup: boolean;
  is_delivered: boolean;
  image?: FileList;
  temperature: "Chilled" | "Frozen" | "Hot";
  partner_id: number;
  member_id?: number | null;
  caregiver_id?: number | null;
  volunteer_id?: number | null;
};

const FoodForm: React.FC = () => {
    const {
      register,
      handleSubmit,
      watch,
      setValue,
      formState: { errors },
    } = useForm<FoodFormInputs>();
  
    const deliveryStatus = watch("delivery_status", "Pending");
    const temperature = watch("temperature", "Chilled");
  
    const onSubmit: SubmitHandler<FoodFormInputs> = (data) => {
      console.log("Form Data:", data);
    };

    return (
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: 600,
          margin: "40px auto",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "white",
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Manage Meals
        </Typography>
  
        <Stack spacing={3}>
          <TextField
            label="Name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message as string}
            fullWidth
          />
  
          <TextField
            label="Ingredients"
            multiline
            rows={4}
            {...register("ingredients", { required: "Ingredients are required" })}
            error={!!errors.ingredients}
            helperText={errors.ingredients?.message as string}
            fullWidth
          />
  
          <TextField
            label="Allergy Information"
            multiline
            rows={2}
            {...register("allergy_information")}
            fullWidth
          />
  
          <TextField
            label="Nutritional Information"
            multiline
            rows={3}
            {...register("nutritional_information")}
            fullWidth
          />
  
          <TextField
            label="Dietary Restrictions"
            {...register("dietary_restrictions")}
            fullWidth
          />
  
          <TextField
            label="Price"
            type="number"
            {...register("price", { required: "Price is required" })}
            error={!!errors.price}
            helperText={errors.price?.message as string}
            fullWidth
          />
  
          <FormControlLabel
            control={<Checkbox {...register("is_frozen")} />}
            label="Is Frozen"
          />
  
          {/* Controlled Select for Delivery Status */}
          <FormControl fullWidth>
            <InputLabel>Delivery Status</InputLabel>
            <Select
              value={deliveryStatus}
              onChange={(e) => setValue("delivery_status", e.target.value as FoodFormInputs["delivery_status"])}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
  
          <FormControlLabel
            control={<Checkbox {...register("is_preparing")} />}
            label="Is Preparing"
          />
  
          <FormControlLabel
            control={<Checkbox {...register("is_finished")} />}
            label="Is Finished"
          />
  
          <FormControlLabel
            control={<Checkbox {...register("is_pickup")} />}
            label="Is Pickup"
          />
  
          <FormControlLabel
            control={<Checkbox {...register("is_delivered")} />}
            label="Is Delivered"
          />
  
          <TextField
            label="Image"
            type="file"
            InputLabelProps={{ shrink: true }}
            {...register("image")}
            fullWidth
          />
  
          {/* Controlled Select for Temperature */}
          <FormControl fullWidth>
            <InputLabel>Temperature</InputLabel>
            <Select
              value={temperature}
              onChange={(e) => setValue("temperature", e.target.value as FoodFormInputs["temperature"])}
            >
              <MenuItem value="Chilled">Chilled</MenuItem>
              <MenuItem value="Frozen">Frozen</MenuItem>
              <MenuItem value="Hot">Hot</MenuItem>
            </Select>
          </FormControl>
  
          <TextField
            label="Partner ID"
            type="number"
            {...register("partner_id", { required: "Partner ID is required" })}
            error={!!errors.partner_id}
            helperText={errors.partner_id?.message as string}
            fullWidth
          />
  
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Submit
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default FoodForm;
  