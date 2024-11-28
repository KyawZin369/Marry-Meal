// components/NavigationBar.tsx
"use client"

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useTheme, useMediaQuery } from "@mui/material";

// Define type for navigation links
interface LinkItem {
  label: string;
  path: string;
}

interface NavigationBarProps {
  links: LinkItem[];
  title: string;
  logo?: string;
}

const Navigation: React.FC<NavigationBarProps> = ({ links, title, logo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1a237e",
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar>
        {/* Logo Section */}
        {logo && (
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              height: 40,
              marginRight: 2,
            }}
          />
        )}

        {/* Title Section */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", textTransform: "uppercase" }}
        >
          {title}
        </Typography>

        {/* Navigation Links for Desktop */}
        {!isMobile && (
          <Box>
            {links.map((link) => (
              <Link key={link.label} href={link.path} passHref>
                <Button
                  sx={{
                    color: "#fff",
                    fontWeight: "500",
                    marginLeft: 2,
                    "&:hover": {
                      backgroundColor: "#3949ab",
                      transform: "scale(1.05)",
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{
              "&:hover": {
                backgroundColor: "#3949ab",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
