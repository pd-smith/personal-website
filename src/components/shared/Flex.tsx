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
};
export default function Flex({
    children,
    justifyContent,
    direction,
    height,
    width,
}: React.PropsWithChildren<FlexProps>): JSX.Element {
    return (
        <div
            style={{
                border: '1px solid black',
                display: 'flex',
                flexDirection: direction,
                justifyContent,
                height: height || (direction === 'row' ? 'unset' : '100%'),
                width: width || (direction === 'column' ? 'unset' : '100%'),
            }}
        >
            {children}
        </div>
    );
}
