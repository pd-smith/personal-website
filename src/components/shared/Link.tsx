import React from 'react';
import { useStyleSystem } from '../system/StyleSystemProvider';

type LinkProps = {
    href: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
};

function useStyledLink(): [string, string] {
    const system = useStyleSystem();
    const color =
        system.colors.link[
            Math.floor(Math.random() * system.colors.link.length)
        ];
    return [system.size.link, color];
}

export function Link({
    children,
    ...otherProps
}: React.PropsWithChildren<LinkProps>): JSX.Element {
    const [fontSize, color] = useStyledLink();
    const [hover, setHover] = React.useState(false); // this is not great. Should probably use some css in js
    return (
        <a
            {...otherProps}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            style={{
                fontSize,
                color,
                ...(hover ? { fontWeight: 'bold', margin: '0 -.25rem' } : {}),
            }}
        >
            {children}
        </a>
    );
}
