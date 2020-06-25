import React from 'react';

export default function Footer() {
    return (
        <header className="w-full h-24 bg-white text-center flex flex-initial justify-center justify-between p-3">
            <h1 className="text-xs text-gray-400">2020 PATRICK SMITH</h1>
            <div className="text-xs">
                <a href="mailto:psmithdb@gmail.com">EMAIL</a>
                <span className="text-gray-400"> // </span>
                <a target="." href="https://github.com/pd-smith">
                    GITHUB
                </a>
                <span className="text-gray-400"> // </span>
                <a target="." href="https://www.linkedin.com/in/patrsmith/">
                    LINKEDIN
                </a>
            </div>
        </header>
    );
}
