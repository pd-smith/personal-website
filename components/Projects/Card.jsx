import React, { useEffect, useState } from 'react';

export default function Card({ name, html_url, description }) {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        async function getLanguages() {
            const cachedLanguages = await fetch(
                `https://raw.githubusercontent.com/pd-smith/personal-site-assets/master/github-cache/${name}/languages.json`
            ).then((result) => result.json());

            setLanguages(
                Object.keys(cachedLanguages).filter(
                    (language) => language !== 'default'
                )
            );
        }
        getLanguages();
    }, []);
    return (
        <article className="bg-white flex justify-between flex-col w-full sm:w-1/2 md:w-1/3 max-w-sm rounded overflow-hidden shadow-lg box-border m-1">
            <h2 className="px-6 py-4">
                <a
                    href={html_url}
                    target="."
                    className="font-bold text-base mb-2"
                >
                    {name.toUpperCase()}
                </a>
                <p className="text-gray-700 text-xs">{description}</p>
            </h2>
            <div className="px-6 py-4">
                {languages.map((language) => (
                    <span
                        key={language}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 font-light"
                    >
                        {language}
                    </span>
                ))}
            </div>
        </article>
    );
}
