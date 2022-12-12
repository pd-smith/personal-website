import { CssBaseline, ThemeProvider, createTheme } from '@internal/ds';
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';

const baseTheme = createTheme();

export const theme = createTheme(baseTheme, {
    palette: {
        text: {
            primary: '#29251a',
        },
    },
    typography: {
        fontWeightBold: 600,
        fontSize: 8,
        body1: {
            fontSize: '1rem',
            letterSpacing: '.25rem',
            textTransform: 'uppercase',
            [baseTheme.breakpoints.down('md')]: {
                fontSize: '1rem',
            },
        },
        h1: {
            fontSize: '4rem',
            fontWeight: 300,
            letterSpacing: '1rem',
            textTransform: 'uppercase',
            [baseTheme.breakpoints.down('md')]: {
                fontSize: '2rem',
            },
            [baseTheme.breakpoints.down('sm')]: {
                fontSize: '2rem',
                letterSpacing: '.65rem',
            },
        },
        h2: {
            fontSize: '2rem',
            letterSpacing: '.25rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            [baseTheme.breakpoints.down('md')]: {
                fontSize: '1rem',
            },
        },
    },
});

function AppEntry(): JSX.Element {
    console.log(theme);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    );
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AppEntry />);
