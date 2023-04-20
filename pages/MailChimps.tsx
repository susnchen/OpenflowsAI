import React, { useState } from 'react';
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import FormControl from '@mui/material/FormControl';
import { Alert, Box, Button, FormControlLabel, FormLabel, Grid, Input, InputLabel, makeStyles, Paper, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';

const CustomForm = (props: any) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isBusiness, setIsBusiness] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        email &&
        name &&
        isBusiness !== undefined &&
        props.onValidated({
            EMAIL: email,
            MERGE1: name,
            MERGE2: isBusiness ? "Yes" : "No",
        });
    }

    return (
        <Container sx={{ "margin-top": "150px", "margin-bottom": "150px" }} id="mailchimps-form">  
            <Stack
                component={"form"}
                spacing={2}
                sx={{padding: 5, "max-width": "400px", margin: "auto"}}
                onSubmit={handleSubmit}>
                <Typography variant="h5" component="h3">
                    Keep up to date with us
                </Typography>
                <div>
                    <TextField
                        fullWidth
                        required
                        label="Name"
                        id="nameText"
                        name="name"
                        variant="standard"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div>
                    <TextField
                        fullWidth
                        required
                        label="Email"
                        id="emailText"
                        name="email"
                        variant="standard"
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div>
                    <FormLabel id="business">Are you a business owner?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="business"
                        defaultValue="isNotBusiness"
                        value={isBusiness ? "isBusiness" : "isNotBusiness"}
                        onChange={(e) => setIsBusiness(e.target.value === "isBusiness")}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="isBusiness" control={<Radio />} label="Yes" />
                        <FormControlLabel value="isNotBusiness" control={<Radio />} label="No" />
                    </RadioGroup>
                </div>
                <div>
                    <Button type="submit" variant="contained">Submit</Button>
                </div>
                {
                    props.status === "error" && (
                        <Alert severity="error">{props.message}</Alert>
                    )
                }
                {
                    props.status === "success" && (
                        <Alert severity="success">{props.message}</Alert>
                    )
                }
            </Stack>
        </Container>
    );
};

const MailChimps = () => {
    const postUrl = process.env.REACT_APP_MAILCHIMP_URL ?? "";

    return (
        <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData: EmailFormFields) => subscribe(formData)}
                />
            )}
        />
    );
};

export default MailChimps;