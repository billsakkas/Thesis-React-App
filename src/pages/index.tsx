import React from "react";
import Footer from "../components/features/Footer";
import Header from "../components/features/Header";

type TIndex = {};

const Main = () => {
  return (
    <>
      <h3 className="mb-10 pt-6 pl-6 text-xl font-bold">Just for you...</h3>
      <div className="mb-10 flex w-screen flex-row flex-wrap items-center justify-center gap-8 2xl:container 2xl:mx-auto">
        <div className="h-52 w-80 rounded-xl bg-gray-400 shadow-lg"></div>
        <div className="h-52 w-80 rounded-xl bg-gray-400 shadow-lg"></div>
        <div className="h-52 w-80 rounded-xl bg-gray-400 shadow-lg"></div>
        <div className="h-52 w-80 rounded-xl bg-gray-400 shadow-lg"></div>
        <div className="h-52 w-80 rounded-xl bg-gray-400 shadow-lg"></div>
        <div className="h-52 w-80 rounded-xl bg-gray-400 shadow-lg"></div>
        <div className="h-52 w-80 rounded-xl bg-gray-400 shadow-lg"></div>
      </div>
    </>
  );
};

const index = ({}: TIndex) => {
  return (
    <>
      <Header type="search" />
      <Main />
      <Footer />
    </>
  );
};

export default index;
