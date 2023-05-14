import React from 'react';

import HorizontalScrollbar from './HorizontalScrollbar';

import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader';

function SimilarExercises( { targetMuscleExercises,  equipmentExercises }) {
  window.scrollTo({top: 0, left: 100, behavior: 'smooth'})
  return (
    <Box sx={{ mt:{ lg: '70px', xs: '50px' }}}>
         <Typography variant="h3" mb={5}>
         Similar Exercises that target the same <span style={{ color: "#ff2625", textTransform: "capitalize" }}>muscle group</span>
         </Typography>
         <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
             {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader />}
         </Stack>
         <Typography variant="h3" mt={10} mb={5}>
          Similar Exercises that target the same <span style={{ color: "#ff2625", textTransform: "capitalize" }}>Equipment</span>
         </Typography>
         <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
             {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader />}
         </Stack>
    </Box>
  )
}

export default SimilarExercises