import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";
import { useNavigate } from 'react-router-dom';

const BodyPart = ({ item, setBodyPart, bodyPart, setSearchedBodyPart }) => {

  const navigate = useNavigate();
  return (
    <Stack
      type="button"
      alignItems="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "lightpurple",
        borderBottomLeftradius: "20px",
        width: "150px",
        height: "200px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        setSearchedBodyPart("")
        // window.scrollTo({top: 1600, left: 100, behavior: 'smooth'})
        navigate('/exercises');
      }}
    >
      <img src={Icon} alt="dumble" style={{ width: "60px", height: "60px"}} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="white"
        texttransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
