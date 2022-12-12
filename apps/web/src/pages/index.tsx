import { Box, Link, Stack, Typography } from '@internal/ds';
import { theme } from '../entry';
import React from 'react';

/**
 * TODO:
 * Figure out how to hot reload DS in parcel
 * Move all these customizations to a theme
 * Fix types
 * Figure out if too basic?
 */

function Pill(props) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100% / 4)"
            borderRadius="125px"
            {...props}
        />
    );
}

export function Home(): JSX.Element {
    return (
        <Box
            alignContent="center"
            padding={5}
            color="#29251a"
            bgcolor="black"
            height="100vh"
            width="100vw"
        >
            <Box
                padding={2}
                bgcolor="#fffbf0"
                width="100%"
                height="100%"
                maxWidth="800px"
                borderRadius="1px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                marginX="auto"
            >
                <Typography textAlign="center" variant="h1">
                    console logging is an efficient form of debugging
                </Typography>
                <Stack
                    component="nav"
                    maxWidth="20rem"
                    borderRadius="125px"
                    overflow="hidden"
                    height="100%"
                    maxHeight="50%"
                    width="100%"
                    alignSelf="center"
                    spacing={2}
                    sx={{
                        color: 'transparent',
                        [theme.breakpoints.down('sm')]: {
                            borderRadius: 0,
                            color: 'inherit',
                            maxWidth: '100%',
                        },
                        transition: theme.transitions.create(
                            ['max-width', 'border-radius', 'color'],
                            { duration: 700 }
                        ),
                        '&:hover': {
                            borderRadius: 0,
                            color: 'inherit',
                            maxWidth: '100%',
                        },
                    }}
                >
                    <Pill bgcolor="#e47795">
                        <Link
                            target="_blank"
                            href="https://github.com/pd-smith"
                            color="inherit"
                        >
                            Github graveyard
                        </Link>
                    </Pill>
                    <Pill
                        marginLeft="calc(100% - 60%) !important"
                        bgcolor="#5c9a81"
                    >
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/patrsmith/"
                            color="inherit"
                        >
                            Linkedin
                        </Link>
                    </Pill>
                    <Pill
                        marginRight="calc(100% - 80%) !important"
                        bgcolor="#7674a7"
                    >
                        <Link
                            target="_blank"
                            href="https://www.channel4.com/programmes/location-location-location"
                            color="inherit"
                        >
                            Favorite show
                        </Link>
                    </Pill>
                </Stack>
                <Box
                    alignItems="end"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Typography variant="h2">Developer</Typography>

                    <Typography variant="h2">Pat S</Typography>
                </Box>
            </Box>
        </Box>
    );
}
