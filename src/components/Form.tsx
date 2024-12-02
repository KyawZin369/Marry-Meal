"use client";

// import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import { RegisterFormValues } from "@/api/register-api/RegisterType";
// import { Register } from "@/api/register-api/RegisterApi";
import { useRouter } from "next/navigation";
import { Register } from "@/api/register-api/RegisterApi";

interface FormProps {
  roleType: string;
  action: string;
}

export default function RegistrationPage({ roleType }: FormProps) {
  // const router = useRouter();
  const { control, handleSubmit } = useForm<RegisterFormValues>({
    defaultValues: {
      type: "",
      email: "",
      user_name: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      relationship_with_member: "null",
      shop_name: "null",
      shop_address: "null",
      gender: "",
      township: "",
      age: 0,
      phone_number: "",
      emergency_contact_number: "null",
      date_of_birth: "",
      address: "",
      dietary_restriction: "null",
      image: null,
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | undefined>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    if (selectedFile) {
      setFile(selectedFile);
      const filePreviewUrl = URL.createObjectURL(selectedFile);
      setPreview(filePreviewUrl);
    }
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const onSubmit = async (data: RegisterFormValues) => {
    if (file) {
      data.image = file.name;
    }

    try {
      const formData = new FormData();
      formData.append("type", data.type);
      formData.append("email", data.email);
      formData.append("user_name", data.user_name);
      formData.append("password", data.password);
      formData.append("confirm_password", data.confirm_password);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("relationship_with_member", data.relationship_with_member || "")
      formData.append("shop_name", data.shop_name || "");
      formData.append("shop_address", data.shop_address || "");
      formData.append("gender", data.gender);
      formData.append("township", data.township || "");
      formData.append("age", String(data.age));
      formData.append("phone_number", data.phone_number);
      formData.append(
        "emergency_contact_number",
        data.emergency_contact_number
      );
      formData.append("date_of_birth", data.date_of_birth);
      formData.append("address", data.address);
      formData.append("dietary_restriction", data.dietary_restriction);

      if (file) {
        formData.append("image", file);
      }
      console.log("FormData: ", data);
      await Register(JSON.parse(JSON.stringify(data)));
    } catch (err) {
      console.error("Error during registration: ", err);
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
          {roleType} Registration
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
          <Box sx={{ mb: 3 }}>
            <Controller
              name="user_name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="User Name"
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
            <FormControl fullWidth required>
              <InputLabel>User Type</InputLabel>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select {...field} label="User Type" sx={{ borderRadius: 2 }}>
                    <MenuItem value="member">member</MenuItem>
                    <MenuItem value="caregiver">caregiver</MenuItem>
                    <MenuItem value="partner">partner</MenuItem>
                    <MenuItem value="volunteer">volunteer</MenuItem>
                    <MenuItem value="donor">donor</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
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
            <Controller
              name="confirm_password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
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
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "12px 14px",
                      },
                    }}
                  />
                )}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "12px 14px",
                      },
                    }}
                  />
                )}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Controller
                name="phone_number"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "12px 14px",
                      },
                    }}
                  />
                )}
              />
            </Box>

            {roleType === "Member" && (
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="emergency_contact_number"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Emergency Contact Number"
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "12px 14px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            {(roleType === "Member" ||
              roleType === "caregiver" ||
              roleType === "volunteer") && (
                <Box sx={{ flex: 1 }}>
                  <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Age"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                          "& .MuiOutlinedInput-input": {
                            padding: "12px 14px",
                          },
                        }}
                      />
                    )}
                  />
                </Box>
              )}

            {roleType === "Partner" && (
              <>
                <Box sx={{ flex: 1 }}>
                  <Controller
                    name="shop_name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Shop Name"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                          "& .MuiOutlinedInput-input": {
                            padding: "12px 14px",
                          },
                        }}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Controller
                    name="shop_address"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Shop Address"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                          "& .MuiOutlinedInput-input": {
                            padding: "12px 14px",
                          },
                        }}
                      />
                    )}
                  />
                </Box>
              </>
            )}

            {roleType === "Member" && (
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="dietary_restriction"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Dietary Restriction"
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "12px 14px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            )}
            {roleType === "Care giver" && (
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="relationship_with_member"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Relationship with Members"
                      variant="outlined"
                      fullWidth
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "12px 14px",
                        },
                      }}
                    />
                  )}
                />
              </Box>
            )}
          </Box>

          <Box sx={{ mb: 3 }}>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Address"
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
              name="township"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Township"
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
              name="date_of_birth"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="date"
                  label="Date of Birth"
                  InputLabelProps={{ shrink: true }}
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
            <FormControl fullWidth required>
              <InputLabel>Gender</InputLabel>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select {...field} label="Gender" sx={{ borderRadius: 2 }}>
                    <MenuItem value="male">male</MenuItem>
                    <MenuItem value="female">female</MenuItem>
                    <MenuItem value="other">other</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    type="file"
                    {...field}
                    fullWidth
                    variant="outlined"
                    onChange={handleFileChange}
                  />

                  {preview && (
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={preview}
                        alt="Uploaded Preview"
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    </Box>
                  )}
                </>
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
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Stack>
  );
}
