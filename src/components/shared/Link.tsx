import React, { useEffect } from 'react';
import { useStyleSystem } from '../system/StyleSystemProvider';

type LinkProps = {
    href: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
};

function pickRandomColor(colors: string[]): string {
    return colors[Math.floor(Math.random() * colors.length)];
}

function useStyledLink(): [string, string] {
    const system = useStyleSystem();
    const [color, setColor] = React.useState(
        pickRandomColor(system.colors.link)
    );
    useEffect(() => {
        const interval = setInterval(
            () => setColor(() => pickRandomColor(system.colors.link)),
            2500
        );
        return () => {
            clearInterval(interval);
        };
    }, [system.colors.link]);
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
                ...(hover
                    ? {
                          fontSize: '23px',
                          fontWeight: 'bold',
                      }
                    : {}),
            }}
        >
            {children}
        </a>
    );
}
