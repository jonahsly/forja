import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TrafficIcon from '@mui/icons-material/Traffic';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', }}>
        <TrafficIcon fontSize="large"/>
        <Typography variant="h6" component="div">
          Herramientas de Ingeniería Vial
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
