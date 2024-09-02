import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const Home = React.lazy(() => import('./pages'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Home />
            </React.Suspense>
        ),
    },
]);

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<RouterProvider router={router} />);
