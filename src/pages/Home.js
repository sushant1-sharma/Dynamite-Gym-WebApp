import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [searchedbodyPart, setSearchedBodyPart] = useState("");

  return (
    <Box>
      <HeroBanner />

      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setSearchedBodyPart={setSearchedBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        searchedbodyPart={searchedbodyPart}
        setSearchedBodyPart={setSearchedBodyPart}
      />
    </Box>
  );
}

export default Home;
