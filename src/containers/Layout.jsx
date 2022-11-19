import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavTabs from '../containers/NavTabs';

export default function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
     
        <NavTabs/>
     
    </React.Fragment>
  );
}
