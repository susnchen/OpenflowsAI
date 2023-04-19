import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import MailChimps from './MailChimps';
import Intro from './Intro';
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Footer from './Footer';

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Intro />
      <Panel1 />
      <Panel2 />
      <MailChimps />
      <Footer />
    </ThemeProvider>
  )
}
