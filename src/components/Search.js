import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import { useNavigate } from 'react-router-dom';



function Search( { setExercises, bodyPart, setBodyPart, setSearchedBodyPart, searchedbodyPart } ) {
  const navigate = useNavigate();

  var   [bodyParts, setBodyParts] = useState([]);

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    
      setSearchedBodyPart(search);
      setBodyPart(search);
      // console.log("Searched data is" , searchedExercises);
      // setExercises(searchedExercises);
      // window.scrollTo({top: 1600, left: 100, behavior: 'smooth'})
      navigate('/exercises');
      // setSearch(search)
      setSearch('');
    }

  return (
    <Stack alignItems="center" mt="-20px" justifyContent="center" p="20px">
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "1px",
              "::placeholder": {
                color: "Black", // Set the placeholder color here
              },
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "grey",
            borderRadius: "10px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          // href= "/exercises"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
            
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default Search;
