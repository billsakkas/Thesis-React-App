import React from "react";
import { default as NextHead } from "next/head";

type THead = {
  title: string;
  description: string;
};

const Head = ({ title, description }: THead) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
