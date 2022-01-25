import React from 'react';

type UseStyleSystemReturn = {
    font: string;
    colors: {
        link: string[];
        body: string;
        heading: string;
        background: string;
    };
    size: {
        link: string;
        body: string;
        heading: string;
    };
    setTheme: (theme: 'cassidoo' | 'cassidooDark') => void;
};

const cassidoo = {
    font: "font-family: 'Poppins', sans-serif",
    colors: {
        link: [
            'rgb(233, 188, 63)',
            'rgb(16, 162, 245)',
            'rgb(36, 208, 90)',
            'rgb(235, 72, 136)',
        ],
        body: '#000',
        heading: '#000',
        background: '#FFF',
    },
    size: {
        link: '1.5rem',
        body: '1.5rem',
        heading: '16rem',
    },
};
const cassidooDark = {
    font: "font-family: 'Poppins', sans-serif",
    colors: {
        link: [
            'rgb(233, 188, 63)',
            'rgb(16, 162, 245)',
            'rgb(36, 208, 90)',
            'rgb(235, 72, 136)',
        ],
        body: '#FFF',
        heading: '#FFF',
        background: '#000',
    },
    size: {
        link: '1.5rem',
        body: '1.5rem',
        heading: '16rem',
    },
};

const StyleSystemContext = React.createContext(cassidooDark);

export function useStyleSystem(): UseStyleSystemReturn {
    const { theme, setCurrentTheme } = React.useContext(StyleSystemContext);

    function setTheme(theme: 'cassidoo' | 'cassidooDark'): void {
        let nextTheme = {};
        switch (theme) {
            case 'cassidooDark':
                nextTheme = cassidooDark;
                break;
            case 'cassidoo':
            default:
                nextTheme = cassidoo;
                break;
        }
        setCurrentTheme(nextTheme);
    }
    return { ...theme, setTheme };
}
export function StyleSystemProvider(
    props: React.PropsWithChildren<React.Provider<unknown>>
): JSX.Element {
    const [currentTheme, setCurrentTheme] = React.useState(cassidoo);
    return (
        <StyleSystemContext.Provider
            value={{ theme: currentTheme, setCurrentTheme }}
        >
            {props.children}
        </StyleSystemContext.Provider>
    );
}
