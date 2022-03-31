import React from 'react';
import { H1 } from '../components/shared/Heading';
import { Body } from '../components/shared/Body';
import { HomeLayout } from '../components/Home/HomeLayout';
import Flex from '../components/shared/Flex';
import { Link } from '../components/shared/Link';
import image from '../profile.jpg';
import { Holographic } from '../components/shared/Holographic';

export function Home(): JSX.Element {
    return (
        <HomeLayout>
            <H1>Hello!</H1>
            <Flex
                stack="1rem"
                gap="1rem"
                justifyContent="flex-start"
                direction={'row'}
            >
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/patrsmith/"
                >
                    linkedin
                </Link>
                <Link target="_blank" href="https://github.com/pd-smith">
                    github
                </Link>
            </Flex>
            <Body>
                {`I'm Pat Smith! I'm a software developer with a strong
                        focus on Frontend and optimizing tasks for delivery. In
                        my free time I enjoy playing games, watching`}{' '}
                <Link
                    href="https://www.channel4.com/programmes/location-location-location"
                    target="_blank"
                >
                    british real estate shows
                </Link>
                {`, and growing my project graveyard on
                        github!`}
            </Body>

            <Flex direction="row" justifyContent="flex-end">
                <Holographic
                    style={{
                        height: '16rem',
                        width: '16rem',
                        borderRadius: '50%',
                    }}
                >
                    <img
                        src={image}
                        alt="me and my nephew"
                        style={{
                            height: '16rem',
                            width: '16rem',
                            borderRadius: '50%',
                        }}
                    />
                </Holographic>
            </Flex>
        </HomeLayout>
    );
}
