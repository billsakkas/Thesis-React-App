import React from "react";
import Footer from "../components/features/Footer";
import Header from "../components/features/Header";

type TIndex = {};

const Main = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="pt-6 pl-6 text-xl font-bold">Just for you...</h3>
      <div className="mx-6 h-52 rounded-xl bg-gray-400 shadow-lg"></div>
      <div className="mx-6 h-52 rounded-xl bg-gray-400 shadow-lg"></div>
      <div className="mx-6 h-52 rounded-xl bg-gray-400 shadow-lg"></div>
    </div>
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
