import React from 'react';
import { useStyleSystem } from '../system/StyleSystemProvider';

type HeadingProps = unknown;

export function H1(props: React.PropsWithChildren<HeadingProps>): JSX.Element {
    const system = useStyleSystem();
    return (
        <h1
            style={{
                fontSize: system.size.heading,
                color: system.colors.heading,
            }}
        >
            {props.children}
        </h1>
    );
}
