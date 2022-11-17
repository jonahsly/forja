import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';


export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', }}>
        <BuildSharpIcon fontSize="large"/>
        <Typography variant="h6" component="div">
          Herramientas de Ingeniería
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
