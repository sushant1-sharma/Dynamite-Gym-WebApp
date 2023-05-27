import React from 'react';

import HorizontalScrollbar from './HorizontalScrollbar';

import { Box, Stack, Typography } from '@mui/material';

import { InfinitySpin } from 'react-loader-spinner';

function Loader(){
 
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
     <InfinitySpin color="White" />
    </Stack>

  )
}

export default Loader;