import React from 'react';

export default function Section({ children, color, name, intensity = 400 }) {
    return (
        <section
            className={`bg-${color}-${intensity} py-5 min-h-screen h-full`}
        >
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
