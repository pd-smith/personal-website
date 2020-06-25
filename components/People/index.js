import React, { useState, useEffect } from 'react';
import PersonTag from './PersonTag';
import Section from '../Section';

export default function People() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function getPeople() {
            const cachedRepos = await fetch(
                'https://raw.githubusercontent.com/pd-smith/personal-site-assets/master/info/twitter.json'
            ).then((result) => result.json());

            setPeople(cachedRepos);
        }
        getPeople();
    }, []);
    return (
        <Section color="red" name="Cool People">
            <div className="flex flex-wrap justify-around">
                {people &&
                    people.map((peopleProps) => <PersonTag {...peopleProps} />)}
            </div>
        </Section>
    );
}
