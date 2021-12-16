import React from 'react';
import Flex from '../components/shared/Flex';

export function Home(): JSX.Element {
    return (
        <Flex direction="column" justifyContent="flex-start">
            <div>Title bar</div>
            <Flex height="100%" direction="row" justifyContent="flex-start">
                <Flex direction="column" justifyContent="space-between">
                    Nav probably for github projects or something?
                </Flex>
                <Flex
                    width="100%"
                    direction="column"
                    justifyContent="space-between"
                >
                    <Flex direction="column" justifyContent="flex-start">
                        <div>Announcement bar</div>
                    </Flex>
                    <Flex direction="column" justifyContent="flex-start">
                        <div>Tabs</div>
                        <Flex direction="row" justifyContent="flex-start">
                            <div>Main content</div>
                            <Flex
                                direction="column"
                                justifyContent="flex-start"
                            >
                                Best of the web (what goes here)
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
