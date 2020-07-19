import React, { useState, useEffect } from 'react';
import Card from './Card';
import CardSkeleton from './CardSkeleton';
import Section from '../Section';
import Transition from '../Transition';

export default function GithubProjects() {
    const [repos, setRepos] = useState([]);
    const [openSource, setOpenSource] = useState([]);

    useEffect(() => {
        async function getRepos() {
            const cachedRepos = await fetch(
                'https://raw.githubusercontent.com/pd-smith/personal-site-assets/master/github-cache/github-repos.json'
            ).then((result) => result.json());

            setRepos(cachedRepos);
        }
        async function getOpenSource() {
            const cachedOpenSource = await fetch(
                'https://raw.githubusercontent.com/pd-smith/personal-site-assets/master/info/open-source.json'
            ).then((result) => result.json());

            setOpenSource(cachedOpenSource);
        }
        getRepos();
        getOpenSource();
    }, []);
    return (
        <>
            <Section color="blue" name="Projects">
                <h2 className="text-white text-xl font-light text-center text-center m-5">
                    OPEN SOURCE
                </h2>
                <div className="flex flex-wrap justify-around">
                    {repos && openSource ? (
                        repos.map(
                            ({ id, name, ...otherProps }) =>
                                openSource.includes(name) && (
                                    <Card
                                        key={id}
                                        {...{ ...otherProps, name }}
                                    />
                                )
                        )
                    ) : (
                        <>
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </>
                    )}
                </div>
                <h2 className="text-white text-xl font-light text-center text-center m-5">
                    OPEN SOURCE
                </h2>
                <div className="flex flex-wrap justify-around">
                    {repos ? (
                        repos.map(
                            ({ id, fork, archived, ...otherProps }) =>
                                !fork &&
                                !archived && <Card key={id} {...otherProps} />
                        )
                    ) : (
                        <>
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </>
                    )}
                </div>
            </Section>
            <Transition firstColor="#63b3ed" secondColor="#fc8181" />
        </>
    );
}
