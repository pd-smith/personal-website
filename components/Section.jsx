import React from 'react';

function getClass(color) {
    switch (color) {
        case 'red':
            return 'bg-red-400';
        case 'blue':
            return 'bg-blue-400';
        case 'yellow':
            return 'bg-yellow-400';
        case 'purple':
            return 'bg-purple-400';
        default:
            return 'bg-white';
    }
}
export default function Section({ children, color, name }) {
    return (
        <section className={`${getClass(color)} py-5 min-h-screen h-full`}>
            {name && (
                <h1 className="text-white text-4xl font-light text-center text-center m-5">
                    {name.toUpperCase()}
                </h1>
            )}
            <div className="flex flex-auto justify-center flex-col h-full">
                {children}
            </div>
        </section>
    );
}
