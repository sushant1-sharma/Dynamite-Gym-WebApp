import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { borderBottom } from "@mui/system";

function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "15px" }, mt: { sm: "32px", xs: "20px" }, justifyContent: "none" }}  px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 2px" }}
        />
      </Link>
      <Stack direction="row" fontSize="24px" alignItems="flex-end" sx={{ gap: { sm: "50px", xs: "20px"}}}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
        <a
          href="#search"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Search Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
