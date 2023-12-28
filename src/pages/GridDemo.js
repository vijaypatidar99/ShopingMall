import React from 'react'
import { Grid, Box } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

const GridDemo = () => {
  return (
    <div>
      <Grid container spacing={4} bgcolor={lightGreen}>
        <Grid item xs={12} lg={3} sm={6} md={4} bgcolor={"red"}>
          <Box>hii this is Grid Demo</Box>
        </Grid>
        <Grid item xs={12} lg={3} sm={6} md={4} bgcolor={"blue"}>
          <Box>hii this is Grid Demo</Box>
        </Grid>
        <Grid item xs={12} lg={3} sm={6} md={4} bgcolor={"green"}>
          <Box>hii this is Grid Demo</Box>
        </Grid>
        <Grid item xs={12} lg={3} sm={6} md={4} bgcolor={"yellow"}>
          <Box>hii this is Grid Demo</Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default GridDemo
