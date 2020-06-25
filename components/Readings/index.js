import React, { useState, useEffect } from 'react';
import Section from '../Section';

export default function Readings() {
    const [readings, setReadings] = useState([]);
    useEffect(() => {
        async function getReadings() {
            const cachedReadings = await fetch(
                'https://raw.githubusercontent.com/pd-smith/personal-site-assets/master/info/readings.json'
            ).then((result) => result.json());

            setReadings(cachedReadings);
        }
        getReadings();
    }, []);
    return (
        <Section color="yellow" name="Readings">
            <div className="flex flex-wrap justify-around">
                {readings &&
                    readings.map(
                        ({ description, title, articleLink, imageLink }) => (
                            <article className="w-full max-w-xl shadow-lg box-border mb-2">
                                <a href={articleLink}>
                                    <img
                                        src={imageLink}
                                        className="h-64 object-cover w-full"
                                    />
                                    <p className="text-sm p-5 bg-white">
                                        <span className="font-bold">
                                            {title.toUpperCase()}
                                        </span>{' '}
                                        {description}
                                    </p>
                                </a>
                            </article>
                        )
                    )}
            </div>
        </Section>
    );
}
