import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png";

function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack
        display="flex"
        flexDirection="row"
        gap="40px"
        alignItems="center"
        justifyContent="center"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" width="70px" height="70px" />
        <Typography variant="h4" pl="0px" ml="-30px" mb="-25px">
          Dynamite Gym
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤️ by Sushant Sharma
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
