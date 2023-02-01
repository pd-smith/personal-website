import React from 'react';
import {
    Box,
    Link,
    Stack,
    Typography,
    theme,
    type BoxProps,
    Paper,
} from '@internal/ds';

/**
 * TODO:
 * Figure out how to hot reload DS in parcel
 * Move all these customizations to a theme
 * Fix types
 * Figure out if too basic?
 */

function Pill(props: BoxProps): JSX.Element {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100% / 4)"
            borderRadius="125px"
            minHeight="25px"
            {...props}
        />
    );
}

export function Home(): JSX.Element {
    return (
        <Box
            alignContent="center"
            padding={{ xs: 0, sm: 1, md: 3, lg: 5 }}
            color="#29251a"
            height="100vh"
            width="100vw"
            minHeight="600px"
        >
            <Paper
                sx={(theme) => ({
                    padding: theme.spacing(5),
                    width: '100%',
                    height: '100%',
                    maxWidth: '800px',
                    borderRadius: '24px',
                    display: 'flex',
                    gap: theme.spacing(2),
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginX: 'auto',
                    boxShadow:
                        '0px 7px 8px -4px rgb(255 255 255 / 20%), 0px 12px 17px 2px rgb(255 255 255 / 14%), 0px 5px 22px 4px rgb(255 255 255 / 12%);',
                    [theme.breakpoints.down('md')]: {
                        borderRadius: 0,
                        padding: theme.spacing(2),
                    },
                })}
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
            </Paper>
        </Box>
    );
}
