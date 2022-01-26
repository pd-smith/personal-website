import React from 'react';

type FlexProps = {
    justifyContent:
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-around'
        | 'space-between'
        | (string & Record<string, never>);
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    height?: string | number;
    width?: string | number;
    maxWidth?: string | number;
    gap?: string | number;
    stack?: string | number;
    style?: React.CSSProperties;
};

export default function Flex({
    children,
    justifyContent,
    direction,
    height,
    width,
    maxWidth,
    gap,
    stack,
    style,
}: React.PropsWithChildren<FlexProps>): JSX.Element {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: direction,
                marginBottom: stack,
                justifyContent,
                height: height || (direction === 'row' ? 'unset' : '100%'),
                width: width || (direction === 'column' ? 'unset' : '100%'),
                maxWidth,
                gap,
                ...style,
            }}
        >
            {children}
        </div>
    );
}
