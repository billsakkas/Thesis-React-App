import React from "react";
import { GetServerSideProps } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

import { TInputs } from "../components/features/SearchHeader";
import Footer from "../components/features/Footer";
import Header from "../components/features/Header";

import Head from "../components/primitive/Head";
import Card from "../components/primitive/Card";

import DangerIcon from "../components/SVGs/DangerIcon";
import { useRouter } from "next/router";
import { RealEstateWithLocation } from "../../prisma/types";

const prisma = new PrismaClient();

type TSearch = {
  Inputs: TInputs;
  RealEstates: [];
};

type TMain = {
  RealEstates: RealEstateWithLocation[];
};

const createFiltersFromInputs = (inputs: TInputs) => {
  const array = [];

  // These are mandatory and if missing we throw an error
  if (!inputs.location) throw new Error("Location is mandatory");
  if (!inputs.transactionType) throw new Error("Transaction type is mandatory");
  if (!inputs.realEstateType) throw new Error("Real estate type is mandatory");

  array.push({ location: { is: { address: { contains: inputs.location } } } });
  array.push({ transactionType: { equals: parseInt(inputs.transactionType) } });
  array.push({ type: { equals: parseInt(inputs.realEstateType) } });

  // These are optional
  if (inputs.priceMin)
    array.push({ price: { gte: parseInt(inputs.priceMin) } });
  if (inputs.priceMax)
    array.push({ price: { lte: parseInt(inputs.priceMax) } });
  if (inputs.sqmetersMin)
    array.push({ sqmeters: { gte: parseInt(inputs.sqmetersMin) } });
  if (inputs.sqmetersMax)
    array.push({ sqmeters: { lte: parseInt(inputs.sqmetersMax) } });

  return array;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Extract the inputs from the query
  const { ...inputs } = context.query as TInputs;

  // Create the filters from the inputs
  const filters = createFiltersFromInputs(inputs);

  const location: Prisma.RealEstateListingInclude = {
    location: true,
  };

  // TODO: Add pagination
  let realEstates = await prisma.realEstateListing.findMany({
    where: { AND: filters },
    include: location,
  });

  // This is a workaround for the dates, as they are not being serialized by NextJS.
  realEstates = JSON.parse(JSON.stringify(realEstates));

  return {
    props: {
      Inputs: inputs as TInputs,
      RealEstates: realEstates,
    } as TSearch,
  };
};

const Main = ({ RealEstates }: TMain) => {
  const router = useRouter();
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

  // If there are no real estates, we render the NoData component
  if (RealEstates.length < 1) return <NoData />;

  // Otherwise, we render them
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <h3 className="self-start pl-8 text-lg font-medium">Listings:</h3>
      {RealEstates.map((realEstate) => {
        const price = `💶 ${realEstate.price.toLocaleString("gr", {
          currency: "EUR",
          style: "decimal",
        })}`;
        return (
          <div
            className="rounded-xl shadow-lg shadow-gray-400"
            onClick={() => router.push(`/listings/${realEstate.id}`)}
          >
            <Card
              title={realEstate.title}
              subtitle={`📍${realEstate.location!.address}`}
              description={price}
              image="https://source.unsplash.com/random/300x200"
            />
          </div>
        );
      })}
    </div>
  );
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
