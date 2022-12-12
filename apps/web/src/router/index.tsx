import React from 'react';
import { ReactLocation, Router } from '@tanstack/react-location';
import { MainLayout } from '../components/layouts/MainLayout';
import { Home } from '../pages';

const location = new ReactLocation();

export default function AppRouter(): JSX.Element {
    return (
        <Router
            location={location}
            routes={[
                {
                    element: <MainLayout />,
                    children: [
                        {
                            path: '/',
                            element: <Home />,
                        },
                    ],
                },
            ]}
        />
    );
}
