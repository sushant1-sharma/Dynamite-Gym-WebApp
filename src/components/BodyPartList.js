import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

function BodyPartList({ setExercises, bodyPart, setBodyPart, setSearchedBodyPart }) {
  const [search, setSearch] = useState("");
  var   [bodyParts, setBodyParts] = useState([]);


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData])
    };
    fetchExercisesData();
  }, []);


  // const handleSearch = async () => {
  //   if (search) {
  //     const exercisesData = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises",
  //       exerciseOptions
  //     );
  //     // console.log(exercisesData);

  //     const searchedExercises = exercisesData.filter(
  //       (exercise) =>
  //         exercise.name.toLowerCase().includes(search) ||
  //         exercise.target.toLowerCase().includes(search) ||
  //         exercise.equipment.toLowerCase().includes(search) ||
  //         exercise.bodyPart.toLowerCase().includes(search)
  //     );
  //     setSearchedBodyPart(search);
  //     setSearch("");
  //     console.log(searchedExercises);
  //     setExercises(searchedExercises);
  //     window.scrollTo({top: 1600, left: 100, behavior: 'smooth'})
  //     // setSearch(search)
  //   }
  // };
  return (
    <Stack id="search" alignItems="center" mt="37px" justifyContent="center" p="20px" bgcolor="grey">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
        color="white"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      
      <Box sx={{ position: 'relative', width: '100%', p: "20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} setSearchedBodyPart={setSearchedBodyPart} isBodyParts={true}/>
      </Box>
     
    </Stack>
  );
}

export default BodyPartList;
