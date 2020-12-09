import React from 'react';
import Box from './components/Box/Box';
import Grid from './components/Grid/Grid';

function App() {
  return (
    <div className="App">
      <Grid container cols={1}>
        <Grid item>
        <Box>Box 1</Box>
        </Grid>

        <Grid item cols={1}>
        <Box>Box 2</Box>
        </Grid>

        <Grid item cols={1}>
        <Box>Box 3</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
