import { Box, Link, Typography } from '@mui/material'

import React from 'react'

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#1a237e",
          color: "#fff",
          padding: "30px 0",
        }}
      >
        {/* Left Footer Container */}
        <Box
          sx={{
            flexBasis: "50%",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row"
            },
            justifyContent: "space-around",
            gap: "10px"
          }}
        >
          <Typography variant='h4' alignSelf="center">
            Merry Meal
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Link href="/" color='#fff'>Join Volunteer</Link>
            <Link href="/" color='#fff'>Became Partner</Link>
            <Link href="/" color='#fff'>Became Donator</Link>
            <Link href="/" color='#fff'>Became Member</Link>
            <Link href="/" color='#fff'>Privacy Policy</Link>
          </Box>
        </Box>

        {/* Right Footer Container */}
        <Box
          sx={{
            flexBasis: "50%",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row"
            },
            justifyContent: "space-around"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography variant='h6'>Contact Us</Typography>
            <Typography variant='body2'>Hot-line number:{" "}</Typography>
            <Typography variant='body2'>123-456-789</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography variant='h6'>Learn More</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Link href="www.linkedin.com" color='#fff'>LinkedIn</Link>
              <Link href="www.facebook.com" color='#fff'>Facebook</Link>
              <Link href="www.youtube.com" color='#fff'>Youtube</Link>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copy Right */}
      <Box 
        sx={{
          textAlign: "center",
          backgroundColor: "#12185d",
          color: "#fff",
          paddingY: "9px"
        }}
      >
        @MarryOnWheel 2024-2030 | All Rights Reserved
      </Box>
    </>
  )
}

export default Footer