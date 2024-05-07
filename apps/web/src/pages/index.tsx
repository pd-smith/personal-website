import React from 'react';

// This 10000% shouldn't be in react at this point, so I'll consider refactoring after getting the visuals I want
// While you're at it, go ahead and clean up that ugly css
export function Home() {
    return (
        <>
            <main>
                <h1>👋 Hey, I'm Pat</h1>
                <section className="card">
                    <h2>💤 Here is my dog</h2>
                    <img
                        alt="Miss Ollie the corgi sleeping on the couch, belly up"
                        src="/ollie.png"
                    ></img>
                </section>
                <section className="card">
                    <h2>💻 Here are my socials</h2>
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
            <div className="lettuce-wrap">
                <hr className="lettuce" />
                <hr className="lettuce" />
                <hr className="lettuce" />
            </div>
        </>
    );
}
