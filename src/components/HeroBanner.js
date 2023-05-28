import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";


import HeroBannerimage from "../assets/images/banner.png";
import GYM_Image from "../assets/images/GYM_Image.jpg";
import Search from "./Search";

function HeroBanner({ setBodyPart }) {
  return (
    <Stack>
      <Box
        sx={{
          mt: { lg: "150px", xs: "100px" },
          ml: { sm: "100px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography
          color="#FF2625"
          fontWeight="600"
          sx={{ fontSize: { lg: "44px", xs: "20px" } }}
        >
          Fitness Club
        </Typography>
        <Typography
          color="white"
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "20px" } }}
          mb="23px"
          mt="30px"
        >
          Sweat, Smile and Repeat
        </Typography>

        <Button
          variant="contained"
          onClick={setBodyPart("all")}
          color="error"
          href="/exercises"
          sx={{
            backgroundColor: "Red",
            padding: "10px",
            display: { lg: "block", xs: "block" },
            width: "180px",
            height: { lg: "45px", xs: "40px" },
            margin: "20px 0 0 0",
          }}
        >
          Explore Exercises
        </Button>

        <Button
        className="blue-button"
        variant="contained"
        href="/bodypart-list"
       sx={{
          backgroundColor: "LightNavy",
          padding: "10px",
          display: { lg: "block", xs: "block" },
          width: "336px",
          height: { lg: "45px", xs: "40px" },
          margin: "20px 0 0 0",
          
        }}
      >
       Awesome Exercises You Should Know
      </Button>

        <Typography
          fontweight={600}
          color="#ff2625"
          mt={-55}
          sx={{
            opacity: 0.2,
            display: { lg: "block", xs: "none" },
            ml: { lg: "220px" },
          }}
          fontSize="200px"
        >
          Exercises
        </Typography>

        {/* <img src={GYM_Image} alt="banner" className="hero-banner-img" /> */}
      </Box>

      {/* <Button
        className="blue-button"
        variant="contained"
        href="/bodypart-list"
       sx={{
          backgroundColor: "LightNavy",
          padding: "10px",
          display: { lg: "block", xs: "block" },
          width: "336px",
          height: { lg: "45px", xs: "40px" },
          margin: {
            lg: "150px 50px 80px 118px",
            xs: "2px 50px 30px 20px",
            md: "2px 50px 30px 120px",
          },
          
        }}
      >
       Awesome Exercises You Should Know
      </Button> */}
    </Stack>
  );
}

export default HeroBanner;
