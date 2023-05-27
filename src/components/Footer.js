import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png";

function Footer() {
  return (
    <Box
      mt="180px"
      position="relative"
      mb="0px"
      className="footer"
    >
      <Stack
        display="flex"
        flexDirection="row"
        gap="40px"
        alignItems="center"
        justifyContent="center"
        px="20px"
        pt="5px"
      >
        <img className="gym-logo" src={Logo} alt="logo" />
        <Typography
          color="white"
          variant="h6"
          pl="0px"
          ml="-30px"
          mb="-25px"
          sx={{
            fontSize: { lg: "20px", xs: "12px" },
          }}
        >
          Dynamite Gym
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Typography
          color="white"
          variant="h6"
          pb="10px"
          mt="20px"
          sx={{
            fontSize: { lg: "20px", xs: "12px" },
          }}
        >
          Made with ❤️ by Sushant Sharma
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
