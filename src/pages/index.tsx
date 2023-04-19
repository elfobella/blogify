import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blogify</title>
        <body className="bg-white text-secondary-500 antialiased dark:bg-secondary-900 dark:text-secondary-400" />
      </Head>
      <div>
        <Navbar />
        <BlogList />
      </div>
    </>
  );
};

export default Home;
