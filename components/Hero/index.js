import React from 'react';
import Section from '../Section';
import workTogetherSrc from './work_together.svg';
export default function Hero() {
    return (
        <Section color="purple">
            <img className=" py-5 px-20" src={workTogetherSrc} />
        </Section>
    );
}
