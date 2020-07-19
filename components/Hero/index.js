import React from 'react';
import Section from '../Section';
import workTogetherSrc from './work_together.svg';
import Transition from '../Transition';
export default function Hero() {
    return (
        <>
            <Section color="purple">
                <img className=" py-5 px-20" src={workTogetherSrc} />
            </Section>
            <Transition firstColor="#b794f4" secondColor="#63b3ed" />
        </>
    );
}
