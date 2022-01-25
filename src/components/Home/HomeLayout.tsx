import React from 'react';
import Flex from '../shared/Flex';
import { useStyleSystem } from '../system/StyleSystemProvider';

type HomeLayout = unknown;

export function HomeLayout(
    props: React.PropsWithChildren<HomeLayout>
): JSX.Element {
    const styles = useStyleSystem();
    return (
        <Flex
            direction="column"
            justifyContent="center"
            style={{
                backgroundColor: styles.colors.background,
                width: '100%',
            }}
        >
            <Flex direction="row" justifyContent="center">
                <Flex
                    direction="column"
                    justifyContent="center"
                    maxWidth="900px"
                    width="100%"
                >
                    {props.children}
                </Flex>
            </Flex>
        </Flex>
    );
}
