import { Box, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <Toolbar
            sx={{padding: 2}}>
            <Box>
                <Image src="logoDark.svg" alt="OpenFlows AI Logo" style={{height: "100px", padding: "10px 0 5px"}} />
            </Box>
        </Toolbar>
    );
};

export default Header;