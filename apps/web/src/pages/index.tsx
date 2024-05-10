/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

// This 10000% shouldn't be in react at this point, so I'll consider refactoring after getting the visuals I want
// While you're at it, go ahead and clean up that ugly css

const OLLIE_PICS = [
    {
        src: '/ollie_2.jpg',
        alt: 'Miss Ollie the corgi getting ready for bed with her piggy: Petey',
    },
    {
        src: '/ollie_tito.jpg',
        alt: 'Miss Ollie the corgi and her cousin Tito the French Bulldog in the back of the car',
    },
    {
        src: '/baby_ollie.jpg',
        alt: 'Miss Ollie as a puppy after her first swim',
    },
];

export function Home(): JSX.Element {
    const [picIndex, setPicIndex] = useState(0);
    const currentPic = OLLIE_PICS[picIndex];
    function nextPic(): void {
        const nextIndex = picIndex + 1;
        if (nextIndex >= OLLIE_PICS.length) {
            setPicIndex(0);
        } else {
            setPicIndex(nextIndex);
        }
    }
    return (
        <main>
            <h1 className="cartoon-border">
                <span className="blocky-text">Hey, I'm Pat</span>
            </h1>
            <section className="card cartoon-border">
                {/*eslint-disable-next-line jsx-a11y/alt-text*/}
                <img {...currentPic}></img>
                <button
                    onClick={nextPic}
                    className="exclaim-wrap cartoon-border halftone"
                >
                    <hr className="exclaim cartoon-border" />
                    <hr className="exclaim cartoon-border" />
                    <hr className="exclaim cartoon-border" />
                </button>
            </section>
            <section className="card cartoon-border">
                <ul>
                    <li>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/patrsmith/"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/pd-smith"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}
