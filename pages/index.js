import React, { Fragment } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import fromUnixTime from 'date-fns/fromUnixTime';
import differenceInHours from 'date-fns/differenceInHours';
import App from '../src/components/App/App.component';
import { withRedux } from '../src/hocs/withRedux.component';
import { addPost } from '../src/redux/ducks/posts/reducers';

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
  const res = await fetch(`http://www.reddit.com/r/coronavirus/top.json?limit=50`);
  const { data } = await res.json();
  const { dispatch } = reduxStore;

  const topPosts = data.children.map((element) => {
    const post = element.data;
    return {
      id: post.id,
      title: post.title,
      author: post.author_fullname,
      hours: differenceInHours(new Date(), fromUnixTime(post.created_utc)) + ' hours ago',
      thumbnailUrl: post.thumbnail,
      commentsCount: post.num_comments,
      readStatus: false,
    };
  });

  dispatch(addPost({ topPosts }));
  return {};
};
export default withRedux(Home);
