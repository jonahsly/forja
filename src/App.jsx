import * as React from 'react';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import NavTabs from './containers/NavTabs';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <NavTabs/>
    </>
  );
}

export default App;