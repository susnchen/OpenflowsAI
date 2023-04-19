import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-scroll'
import React from 'react';
import Header from './Header';

const Intro = () => {
    return (
        <Box
            sx={{
                "min-height": "100vh",
                "background-image": "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
            }}>
            <Header />
            <Container>
                <Grid container
                    sx={{
                        "position": "absolute",
                        "bottom": "20%"
                    }}>
                    <Grid item sm={12} md={10} lg={8} data-aos="fade-right">
                        <Typography variant="h3">
                            An AI driven chatbot business helper for CRM
                        </Typography>
                        <Typography variant="body1">
                            Using AI to help small business with inventory management, order tracking, invoice creation, workflow planning, and customer reponse. A chatbot that can make decisions without owners supervision and reduce wait times and delays by providing response to suppliers and customers
                        </Typography>
                        <Link to="mailchimps-form" smooth={true} spy={true}>
                            <Button variant="outlined">Connect with Us!</Button>
                        </Link>
                    </Grid>
                    <Grid item sm={0} md={2} lg={4}></Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Intro;