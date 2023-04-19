import { Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Box } from '@mui/system';

const Panel2 = () => {
    return (
        <Container sx={{ "margin-top": "150px" }}>
            <Stack spacing={5}>
                <Grid container>
                    <Grid item md={6} sm={12} xs={12} data-aos="fade-right" sx={{ margin: "auto 0" }} order={{xs:2, md:1}}>
                        <Typography variant="body1">
                            Customer relationship management (CRM) technology is software used by many businesses to manage company relationships and interactions with their customers. We plan to tackle the difficulties small businesses have when incorporating CRM software into their business operations by providing a user friendly and intuitive interface through the use of chatbots.
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} data-aos="fade-left" order={{xs:1, md:2}}>
                        <Typography variant="h6" align="center" color="#227AD3">What is CRM?</Typography>
                        <Box height="300px" textAlign="center">
                            <Image alt="CRM graphic" src="crm.svg" style={{ height: "100%", maxWidth: "100%", padding: "50px" }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={6} sm={12} xs={12} data-aos="fade-right">
                        <Typography variant="h6" align="center" color="#227AD3">Integration with communication mediums</Typography>
                        <Box height="300px" textAlign="center">
                            <Image alt="Social media graphic" src="dataMedium.png" style={{ height: "100%", maxWidth: "100%", padding: "50px" }} />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} data-aos="fade-left" sx={{ margin: "auto 0" }}>
                        <Typography variant="body1">
                            We will send data from communication mediums business owners have with customers to CRM software, simplying record creation and transactions that occur. This process will be performed using secure encryption to ensure user's privacy.
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
};

export default Panel2;