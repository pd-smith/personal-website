import React from 'react';

export default function PersonTag({ name, handle, pictureHref, twitterHref }) {
    return (
        <a
            target="."
            href={twitterHref}
            className="flex text-white items-center justify-between flex-col w-full sm:w-1/2 md:w-1/3 max-w-sm rounded overflow-hidden box-border m-1"
        >
            <img
                className="h-20 w-20 object-cover rounded-full mb-1"
                src={pictureHref}
            />
            <h2 className="text-lg font-bold">{name.toUpperCase()}</h2>
            <span className="text-xs">{handle.toUpperCase()}</span>
        </a>
    );
}
