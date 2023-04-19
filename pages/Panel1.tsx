import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Panel1 = () => {
  return (
    <Container sx={{ "padding-top": "100px" }}>
      <Grid container>
        <Grid item md={5} lg={4} data-aos="fade-right">
          <Typography variant="h6" align="center" color="#227AD3"><strong>Our Mission</strong></Typography>
        </Grid>
        <Grid item md={7} lg={8}>
          <Typography variant="body1" data-aos="fade-left">
            Small businesses dont have the luxury to create and maintain a customer facing department, often leading to mismanagement of customer orders, accountings, and supply chain inquiries, that can be solved with the use of CRM software. A large percentage of business owners are not tech savy and driven away by the learning curve of integrating such software into their operations. Our goal is to help small businesses overcome the CRM barrier through a user friendly chatbot powered by Open AI.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Panel1;