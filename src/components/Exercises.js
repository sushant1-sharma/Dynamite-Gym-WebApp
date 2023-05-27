import React, { useEffect, useState, useRef } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material/";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";

import Loader from './Loader';


export default function Exercises({ exercises, setExercises, bodyPart, searchedbodyPart }) {
  const myRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);

  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({
      top: myRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      setShowLoader(true);
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
        exercisesData = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(bodyPart) ||
            exercise.target.toLowerCase().includes(bodyPart) ||
            exercise.equipment.toLowerCase().includes(bodyPart) ||
            exercise.bodyPart.toLowerCase().includes(bodyPart)
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
    console.log("I am Exercise Component Search Body" , exercises);
  }, [bodyPart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [showLoader]);


  console.log("ShowLoader is", showLoader);
  return (
    <>
      {showLoader? (
        <Loader />
      ) : (
        <Box
          ref={myRef}
          id="exercises"
          sx={{ mt: { lg: "30px", xs: "70px" } }}
          mt="50px"
          p="20px"
          bgcolor="grey"
        >
          <Typography variant="h3" mb="46px" color="white">
            {searchedbodyPart && exercises.length > 0
              ? `Showing results for ${searchedbodyPart}`
              : bodyPart === "all"
              ? "All Exercises"
              : searchedbodyPart && exercises.length === 0
              ? "No Results Found"
              : `Showing results for ${bodyPart}`}
          </Typography>
          <Stack
            direction="row"
            sx={{ gap: { lg: "50px", xs: "50px" } }}
            flexWrap="wrap"
            justifyContent="center"
          >
            {currentExercises.map((exercise, index) => (
              <p key={index}>
                <ExerciseCard exercise={exercise} />
              </p>
            ))}
          </Stack>
          <Stack
            mt="100px"
            position="relative"
            alignItems="center"
            bgcolor="grey"
            width="100%" // Set the width to 100% to fill the available space
            justifyContent="center" // Center the items horizontally
          >
            {exercises.length > 12 && (
              <Pagination
                color="secondary"
                size="large"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
              />
            )}
          </Stack>
        </Box>
      )}
    </>
  );
            }

