import React, { Fragment } from 'react';
import Head from 'next/head';
import App from '../src/components/App/App.component';
import { withRedux } from '../src/hocs/withRedux.component';
import { fetchPosts } from '../src/redux/ducks/posts/reducers';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <App />
    </Fragment>
  );
};
Home.getInitialProps = async ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  await dispatch(fetchPosts({}));
  return {};
};
export default withRedux(Home);
