import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from './Paper';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <Container maxWidth={props.maxWidth} style={{ backgroundColor: '#666666', padding:'2%', borderRadius:'5px'}}>
        <Typography component="div" style={{ color:'#FFFFFF', height: '25%', width: '100%'}} >
          
        </Typography>
      </Container>
    </React.Fragment>
  );
}
