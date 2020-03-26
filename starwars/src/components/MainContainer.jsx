import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import grey from '@material-ui/core/colors/grey';

const color = grey[900];

export default function MainContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Typography component="div" style={{ backgroundColor: color, height: '100vh' }} />
        {/* <Typography component="div" style={{ height: '100vh' }} ></Typography> */}
      </Container>
    </React.Fragment>
  );
}