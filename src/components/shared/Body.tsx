import React from 'react';
import { useStyleSystem } from '../system/StyleSystemProvider';

type BodyProps = unknown;

export function Body(props: React.PropsWithChildren<BodyProps>): JSX.Element {
    const system = useStyleSystem();
    return (
        <p
            style={{
                fontSize: system.size.body,
                color: system.colors.body,
            }}
        >
            {props.children}
        </p>
    );
}
