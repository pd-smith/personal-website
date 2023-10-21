import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<RouterProvider router={router} />);
