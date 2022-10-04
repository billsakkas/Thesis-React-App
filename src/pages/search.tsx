import { GetServerSideProps } from "next";
import React from "react";
import Footer from "../components/features/Footer";
import Header from "../components/features/Header";
import { TInputs } from "../components/features/SearchHeader";
import Head from "../components/primitive/Head";
import DangerIcon from "../components/SVGs/DangerIcon";
import { PrismaClient, RealEstateListing } from "@prisma/client";

const prisma = new PrismaClient();

type TSearch = {
  Inputs: TInputs;
  RealEstates: RealEstateListing[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { ...inputs } = query as TInputs;
  console.log(`inputs ${JSON.stringify(inputs)}`);
  let realEstates = await prisma.realEstateListing.findMany({
    where: {
      AND: [
        { location: { some: { address: { contains: inputs.location } } } },
        { price: { gte: parseInt(inputs.priceMin) } },
        { price: { lte: parseInt(inputs.priceMax) } },
        { sqmeters: { gte: parseInt(inputs.sqmetersMin) } },
        { sqmeters: { lte: parseInt(inputs.sqmetersMax) } },
        { type: { equals: parseInt(inputs.realEstateType) } },
        { transactionType: { equals: parseInt(inputs.transactionType) } },
      ],
    },
  });

  console.log(`realEstates ${JSON.stringify(realEstates)}`);

  realEstates = JSON.parse(JSON.stringify(realEstates));

  return {
    props: {
      Inputs: inputs as TInputs,
      RealEstates: realEstates,
    } as TSearch,
  };
};

type TMain = {
  RealEstates: RealEstateListing[];
};

const Main = ({ RealEstates }: TMain) => {
  const NoData = () => {
    return (
      <div className="flex h-64 flex-col items-center justify-center">
        <div className="h-32 w-32">
          <DangerIcon />
        </div>
        <div className="text-2xl font-bold text-gray-500">No Data</div>
      </div>
    );
  };

  if (RealEstates.length > 0)
    return (
      <>
        {RealEstates.map((realEstate) => {
          return <div key={realEstate.id}>{realEstate.id}</div>;
        })}
      </>
    );

  return <NoData />;
};

const Search = ({ Inputs, RealEstates }: TSearch) => {
  return (
    <>
      <Head
        title="SweetDeal - Search Real Estates"
        description="This page provides a way to search for available real estates"
      />
      <Header type="search" searchHeaderInputs={Inputs} />
      <Main RealEstates={RealEstates} />
      <Footer />
    </>
  );
};

export default Search;
