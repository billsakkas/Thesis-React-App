import { GetServerSideProps } from "next";
import React from "react";
import Header from "../components/features/Header";
import { TInputs, TSearchHeader } from "../components/features/SearchHeader";
import Head from "../components/primitive/Head";

type TSearch = { Inputs: TInputs };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { ...inputs } = query as TInputs;
  console.log(`inputs ${JSON.stringify(inputs)}`);

  return {
    props: {
      Inputs: inputs as TInputs,
    } as TSearchHeader,
  };
};

const Search = ({ Inputs }: TSearch) => {
  return (
    <>
      <Head
        title="SweetDeal - Search Real Estates"
        description="This page provides a way to search for available real estates"
      />
      <Header type="search" searchHeaderInputs={Inputs} />
    </>
  );
};

export default Search;
