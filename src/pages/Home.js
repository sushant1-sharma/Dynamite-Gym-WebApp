import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";

import Exercises from "../components/Exercises";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import BodyPartList from "../components/BodyPartList";

function Home({ setBodyPart }) {

  return (
    <Box>
     <HeroBanner setBodyPart={setBodyPart}/>
    </Box>
  );
}

export default Home;
