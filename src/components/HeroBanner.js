import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerimage from "../assets/images/banner.png";
import GYM_Image from "../assets/images/GYM_Image.jpg";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "100px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" LineHeight="35px" mb={4}>
        Check out the most effective Exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: "#ff2625", padding: '10px'}}>
        Explore Exercises
      </Button>
      <Typography
        fontweight={600}
        color="#ff2625"
        mt={2}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={GYM_Image} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
