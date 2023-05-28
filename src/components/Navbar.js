import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { borderBottom } from "@mui/system";

function Navbar({ HomeScreen, setBodyPart }) {

  const handleClick = () => {
    setBodyPart("all");
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "45px" },
        mt: { sm: "-80px", xs: "-80px" },
        ml: { sm: "32px", xs: "10px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 2px",
            color: "white",
          }}
        />
      </Link>
      <Stack
        direction="row"
        fontSize="24px"
        alignItems="flex-end"
        sx={{ gap: { sm: "50px", xs: "40px" } }}
      >
        <a
          href="/"
          onClick={handleClick}
          style={{
            textDecoration: "none",
            color: "white",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </a>

        <a
          onClick={handleClick}
          href="/exercises"
          component="button"
          style={{ textDecoration: "none", color: "white" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
