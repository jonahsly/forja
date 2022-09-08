import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavTabs from '../components/NavTabs';

export default function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <NavTabs/>
      </Container>
    </React.Fragment>
  );
}
