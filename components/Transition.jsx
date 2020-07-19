import React from 'react';

export default function Transition({ firstColor, secondColor }) {
    return (
        <svg
            style={{ fill: secondColor, background: firstColor }}
            viewBox="0 0 2880 425"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2880 465.1V0.0999756H2622.3C2413.9 0.0999756 2209.3 39 2029.9 112.8L2002.2 124.2C1822.7 198 1618.1 236.9 1409.8 236.9C1240.1 236.9 1072.4 262.7 918.4 312.6L809.7 347.8C655.8 397.7 488.1 423.5 318.3 423.5H0V465.1"></path>
        </svg>
    );
}
