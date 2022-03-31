import React, { useEffect } from 'react';

type HolographicProps = {
    style: React.HTMLAttributes<HTMLDivElement>['style'];
};

export function Holographic({
    children,
    style,
}: React.PropsWithChildren<HolographicProps>): JSX.Element {
    const ref = React.useRef(null);
    const [hover, setHover] = React.useState(false);
    const updateHolographicBackground = React.useCallback((value) => {
        const percentage = value * 100;
        ref.current.style.backgroundPosition = percentage + '%';
    }, []);

    const handleMouseMove = React.useCallback((event) => {
        const element = event.target.getBoundingClientRect();
        const x = event.clientX - element.left;
        const width = element.right - element.left;
        const value = x / width;

        updateHolographicBackground(value);
    }, []);

    const handleDeviceOrientation = React.useCallback((event) => {
        const z = Math.abs(event.alpha); // rotation degrees from 0 to 360
        const value = z / 360;
        updateHolographicBackground(value);
    }, []);

    useEffect(() => {
        window.addEventListener(
            'deviceorientation',
            handleDeviceOrientation,
            true
        );
        return () => {
            window.removeEventListener(
                'deviceorientation',
                handleDeviceOrientation,
                true
            );
        };
    }, []);
    return (
        <>
            <div
                ref={ref}
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                onMouseMove={handleMouseMove}
                style={{
                    position: 'absolute',
                    backgroundImage: `linear-gradient(
            to right,
            rgb(194, 255, 182),
            rgb(255, 163, 182),
            rgb(221, 169, 255),
            rgb(162, 209, 255)
        )`,
                    backgroundSize: '200%',
                    backgroundBlendMode: 'overlay',
                    display: 'block',
                    zIndex: '999',
                    opacity: hover ? 0.4 : 0.3,
                    ...style,
                }}
            />
            <div style={{ position: 'relative', ...style }}>{children}</div>
        </>
    );
}
