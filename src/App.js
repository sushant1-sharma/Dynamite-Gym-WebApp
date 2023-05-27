import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Exercises from "./components/Exercises";
import Search from "./components/Search";
import BodyPartList from "./components/BodyPartList";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [searchedbodyPart, setSearchedBodyPart] = useState("");

  return (
    <Box
      width="400px"
      sx={{
        width: { xl: "1488px" },
      }}
      m="auto"
    >
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        searchedbodyPart={searchedbodyPart}
        setSearchedBodyPart={setSearchedBodyPart}
      />
      <Navbar HomeScreen={true} setBodyPart={setBodyPart} />
      <Routes>
        <Route path="*" element={<Home setBodyPart={setBodyPart} />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route
          path="/exercises"
          element={
            <Exercises
              setExercises={setExercises}
              exercises={exercises}
              bodyPart={bodyPart}
              searchedbodyPart={searchedbodyPart}
              setSearchedBodyPart={setSearchedBodyPart}
            />
          }
        />

        <Route
          path="/bodypart-list"
          element={
            <BodyPartList
              setExercises={setExercises}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              setSearchedBodyPart={setSearchedBodyPart}
            />
          }
        />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
