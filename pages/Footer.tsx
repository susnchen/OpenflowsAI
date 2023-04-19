import { Box, Grid, Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "#227AD3", color: "#fff"}}>
            <Container>
                <Grid container>
                    <Grid item md={4} textAlign="center">
                        <Box>
                            <Image src="footerLogo.svg" alt="OpenFlows AI Logo" style={{height: "60px", padding: "10px 0 5px"}} />
                        </Box>
                    </Grid>
                    <Grid item md={4} textAlign="center" sx={{margin: "auto"}}>
                        <Link href = "mailto: replace with email" color="inherit">Contact Us</Link>
                    </Grid>
                    <Grid item md={4} textAlign="center" sx={{margin: "auto"}}>
                        <Typography variant="body2">
                            Copyright © OpenFlowsAI {new Date().getFullYear()}.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;