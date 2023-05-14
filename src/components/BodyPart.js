import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart, setSearchedBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftradius: "20px",
        width: "270px",
        height: "200px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        setSearchedBodyPart("")
        window.scrollTo({top: 1600, left: 100, behavior: 'smooth'})
      }}
    >
      <img src={Icon} alt="dumble" style={{ width: "60px", height: "60px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        texttransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
