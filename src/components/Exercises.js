import React, { useEffect, useState, useRef } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material/";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";



function Exercises({ exercises, setExercises, bodyPart, searchedbodyPart }) {
  const myRef = useRef(null);
 
  const [ currentPage, setCurrentPage ] = useState(1);

 const exercisesPerPage=12;

 const indexOfLastExercise = currentPage*exercisesPerPage;
 const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage;
 const currentExercises=exercises.slice(indexOfFirstExercise, indexOfLastExercise);

 const paginate = (e, value)=>{
    setCurrentPage(value);

    window.scrollTo({ top: myRef.current.offsetTop, left: 0, behavior: 'smooth' });
 }

 useEffect(()=>{
     const fetchExercisesData = async()=>{
      let exercisesData = [];
      if(bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
      }
      else{
        exercisesData= await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData);
     }
     fetchExercisesData();
 }, [bodyPart]);

  return (
    <Box ref={myRef} id="exercises" sx={{ mt: { lg: "110px", xs: "70px"} }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
      {searchedbodyPart ? `Showing results for ${searchedbodyPart}`: (bodyPart === 'all' ? 'All Exercises' : `Showing results for ${bodyPart}`)}
  
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "50px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <p>
            <ExerciseCard key={index} exercise={exercise} />
          </p>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 12 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
