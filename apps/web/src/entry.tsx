import { CssBaseline, ThemeProvider, theme } from '@internal/ds';
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';

function AppEntry(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    );
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<AppEntry />);
