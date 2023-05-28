import React from 'react';

import HorizontalScrollbar from './HorizontalScrollbar';

import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader';

function SimilarExercises( { targetMuscleExercises,  equipmentExercises }) {
  // window.scrollTo({top: 0, left: 100, behavior: 'smooth'})
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
          <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="white" mb="33px">
         Similar Exercises that target the same <span style={{ color: "#ff2625", textTransform: "capitalize" }}>muscle group</span>
         </Typography>
         <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
             {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader />}
         </Stack>
         <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="white" mb="33px">
          Similar Exercises that target the same <span style={{ color: "#ff2625", textTransform: "capitalize" }}>Equipment</span>
         </Typography>
         <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
             {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader />}
         </Stack>
    </Box>
  )
}

export default SimilarExercises