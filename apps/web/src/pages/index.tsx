import React from 'react';
import { css } from '../../styled-system/css';
import {
    circle,
    container,
    flex,
    hstack,
    visuallyHidden,
} from '../../styled-system/patterns';

function RadioOption(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { children, ...otherProps } = props;
    return (
        <label
            aria-checked={otherProps?.checked}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className={css({
                padding: 5,
                _motionSafe: { transition: 'all 0.3s' },
                width: '100%',
                cursor: 'pointer',
                bg: {
                    base: 'rgba(255, 255, 255, 0.4)',
                    _hover: 'rgba(255, 255, 255, 0.8)',
                    _active: 'rgba(255, 255, 255)',
                    _checked: 'rgba(255, 255, 255, 0.8)',
                },
                md: {
                    '&:first-child': {
                        borderTopRadius: 'md',
                    },
                    '&:last-child': {
                        borderBottomRadius: 'md',
                    },
                },
                '&:first-child': {
                    borderStartRadius: 'md',
                },
                '&:last-child': {
                    borderEndRadius: 'md',
                },
            })}
        >
            {children}
            <input type="radio" className={visuallyHidden()} {...otherProps} />
        </label>
    );
}

const VIEW_SELECTIONS = {
    github: {
        label: 'Github graveyard',
        imgPath:
            'https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png',
        href: 'https://github.com/pd-smith',
    },
    linkedin: {
        label: 'Linkedin',
        imgPath:
            'https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png',
        href: 'https://www.linkedin.com/in/patrsmith/',
    },
    show: {
        label: 'Favorite show',
        imgPath:
            'https://housebeautiful.cdnds.net/17/37/2560x1920/sd-aspect-1505402491-location-location-location-kirstie-and-phil.jpg',
        href: 'https://www.channel4.com/programmes/location-location-location',
    },
};

export function Home(): JSX.Element {
    const [selectedView, setSelectedView] =
        React.useState<keyof typeof VIEW_SELECTIONS>('github');
    return (
        <div
            className={flex({
                minHeight: '100vh',
                direction: 'column',
                justifyContent: 'center',
                background:
                    'linear-gradient(#e664657d, #9198e57d), url(https://grainy-gradients.vercel.app/noise.svg)',
                filter: 'contrast(100%) brightness(100%)',
            })}
        >
            <div className={container({ px: 'container', width: '100%' })}>
                <div
                    className={flex({
                        borderRadius: 'md',
                        shadow: '0px 4px 24px 1px rgba(0, 0, 0, 0.28)',
                        backdropFilter: 'blur(5px)',
                        minHeight: { md: '300px', base: '90vh' },
                        padding: 3,
                        bg: '#ffffff8f',
                        direction: 'column',
                        gap: 3,
                    })}
                >
                    <nav className={hstack({ gap: 2 })}>
                        <button
                            className={circle({
                                bg: { base: 'red', _hover: 'red.700' },
                                _motionSafe: { transition: 'all 0.3s' },
                                size: '15px',
                            })}
                        ></button>
                        <button
                            className={circle({
                                bg: { base: 'yellow', _hover: 'yellow.700' },
                                _motionSafe: { transition: 'all 0.3s' },
                                size: '15px',
                            })}
                        ></button>
                        <button
                            className={circle({
                                bg: { base: 'green.500', _hover: 'green.700' },
                                _motionSafe: { transition: 'all 0.3s' },
                                size: '15px',
                            })}
                        ></button>
                    </nav>
                    <main
                        className={flex({
                            padding: 6,
                            gap: 20,
                            direction: 'column',
                        })}
                    >
                        <div
                            className={hstack({
                                gap: 3,
                                alignItems: 'baseline',
                                flexWrap: 'wrap',
                            })}
                        >
                            <h1
                                className={css({
                                    textStyle: { md: '5xl', base: '2xl' },
                                    fontWeight: 'bold',
                                    paddingY: 5,
                                    paddingX: 10,
                                    textAlign: 'center',
                                    color: '#000000b0',
                                    borderRadius: 'full',
                                    display: 'inline-block',
                                    bg: 'zinc.100',
                                })}
                            >
                                Patrick Smith
                            </h1>
                            <p
                                className={css({
                                    textStyle: { md: 'xl', base: 'md' },
                                    fontWeight: 'bold',
                                    paddingY: 3,
                                    paddingX: 6,
                                    textAlign: 'center',
                                    color: '#ffffffc4',
                                    borderRadius: 'full',
                                    display: 'inline-block',
                                    bg: 'violet.500',
                                })}
                            >
                                Software Developer
                            </p>
                            <p
                                className={css({
                                    textStyle: { md: 'xl', base: 'md' },
                                    fontWeight: 'bold',
                                    paddingY: 3,
                                    paddingX: 6,
                                    textAlign: 'center',
                                    color: '#ffffffc4',
                                    borderRadius: 'full',
                                    display: 'inline-block',
                                    bg: 'emerald.500',
                                })}
                            >
                                Tinkerer
                            </p>
                        </div>
                        <div
                            className={flex({
                                position: 'relative',
                                minHeight: '500px',
                            })}
                        >
                            <div
                                className={flex({
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    display: { base: 'hidden', md: 'flex' },
                                })}
                            >
                                <div></div>
                                <div className={flex({ width: '50%' })}>
                                    <div
                                        className={css({
                                            borderRadius: 'md',
                                            transform:
                                                'skew(-10deg) scaleX(1.5)',
                                            bgColor: 'zinc.100',
                                            width: '100%',
                                            height: '100%',
                                        })}
                                    ></div>
                                    <div
                                        className={css({
                                            borderRadius: 'md',
                                            bgColor: 'zinc.100',
                                            width: '100%',
                                            height: '100%',
                                        })}
                                    ></div>
                                </div>
                            </div>
                            <div
                                className={flex({
                                    position: 'absolute',
                                    direction: { md: 'row', base: 'column' },
                                    top: 0,
                                    gap: { md: 3, base: 10 },
                                    width: '100%',
                                    justifyContent: 'space-between',
                                })}
                            >
                                <fieldset
                                    className={flex({
                                        direction: {
                                            md: 'column',
                                            base: 'row',
                                        },

                                        alignItems: 'flex-start',
                                    })}
                                >
                                    {Object.entries(VIEW_SELECTIONS).map(
                                        ([value, { label }]) => (
                                            <RadioOption
                                                onChange={(event) =>
                                                    setSelectedView(
                                                        event.target
                                                            ?.value as keyof typeof VIEW_SELECTIONS
                                                    )
                                                }
                                                key={value}
                                                checked={selectedView === value}
                                                name="view"
                                                value={value}
                                            >
                                                {label}
                                            </RadioOption>
                                        )
                                    )}
                                </fieldset>
                                <div className={css({ position: 'relative' })}>
                                    <img
                                        src={
                                            VIEW_SELECTIONS[selectedView]
                                                ?.imgPath
                                        }
                                        alt={`Related to ${VIEW_SELECTIONS[selectedView]?.label}`}
                                        className={css({
                                            height: '100%',
                                            aspectRatio: 1,
                                            borderRadius: 'full',
                                            width: '100%',
                                            maxWidth: '500px',
                                            objectFit: 'cover',
                                        })}
                                    />
                                    <a
                                        target="."
                                        href={
                                            VIEW_SELECTIONS[selectedView]?.href
                                        }
                                        className={css({
                                            position: 'absolute',
                                            bottom: 5,
                                            end: 5,
                                            background: {
                                                base: 'zinc.100',
                                                md: 'transparent',
                                                _hover: 'zinc.200',
                                                _target: 'zinc.200',
                                                _active: 'zinc.300',
                                            },
                                            padding: 3,
                                            borderRadius: 'full',
                                            _motionSafe: {
                                                transition: 'all 0.3s',
                                            },
                                            color: {
                                                base: '#000000b0',
                                                _hover: '#000000',
                                            },
                                        })}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="44px"
                                            height="44px"
                                            fill="none"
                                            strokeWidth="2.7"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeWidth="2.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 3h-6m6 0-9 9m9-9v6"
                                            ></path>
                                            <path
                                                stroke="currentColor"
                                                strokeWidth="2.7"
                                                strokeLinecap="round"
                                                d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
