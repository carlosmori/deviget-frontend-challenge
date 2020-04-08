import Head from "next/head";
import App from "../src/components/App/App.component";
const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <App />
  </div>
);

export default Home;
