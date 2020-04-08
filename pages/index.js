import React from 'react';
import Head from 'next/head';
import App from '../src/components/App/App.component';
import withLayout from '../src/hocs/withLayout.component';
const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <App />
  </div>
);

export default withLayout(Home);
