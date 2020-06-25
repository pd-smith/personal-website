import React from 'react';
import Head from 'next/head';
import Projects from '../components/Projects';
import People from '../components/People';
import Readings from '../components/Readings';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Head>
                <title>Pat Smith</title>
            </Head>
            <Hero />
            {/* <div>Put in about me section</div>
            <div>
                Fix bug that removes "unused" background styles that are
                computed
            </div> */}
            <Projects />
            <People />
            <Readings />
        </>
    );
};

export default Home;
