import '../styles/index.css';

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main className="mt-24">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default App;
