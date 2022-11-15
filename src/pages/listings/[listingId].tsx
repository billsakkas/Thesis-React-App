import React from "react";
import { GetServerSideProps } from "next";

import { PrismaClient } from "@prisma/client";
import { RealEstateWithLocation } from "../../../prisma/types";
const prisma = new PrismaClient();

import ListingImageCarousel from "../../components/features/Listing/ListingImageCarousel";
import Footer from "../../components/features/Footer";
import Header from "../../components/features/Header";
import Head from "../../components/primitive/Head";

import ListingContactForm from "../../components/features/Listing/ListingContactForm";
import ListingFeatureChips from "../../components/features/Listing/ListingFeatureChips";
import ListingHeader from "../../components/features/Listing/ListingHeader";

type TListing = {
  listing: RealEstateWithLocation;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { listingId } = context.params as { listingId: string };

  let listing = await prisma.realEstateListing.findUnique({
    where: { id: listingId as string },
    include: { location: true },
  });

  listing = JSON.parse(JSON.stringify(listing));

  return {
    props: {
      listing,
    } as TListing,
  };
};

const Main = ({ listing }: TListing) => {
  return (
    <div className="mx-auto mb-4 lg:w-2/5">
      <ListingImageCarousel
        images={[
          "https://source.unsplash.com/random/300x200",
          "https://source.unsplash.com/random/400x200",
          "https://source.unsplash.com/random/500x200",
          "https://source.unsplash.com/random/200x200",
        ]}
      />
      <ListingHeader
        title={listing.title}
        address={listing.location!.address}
        city={listing.location!.city}
        country={listing.location!.country}
      />
      <ListingFeatureChips listing={listing} />
      <ListingDescription listing={listing} />
      {/* <ListingContactForm /> */}
    </div>
  );
};

const ListingDescription = ({ listing }: TListing) => {
  return (
    <div className="mt-4 px-4">
      <h3 className="text-xl">Description</h3>
      <p className="">{listing.description}</p>
    </div>
  );
};

const Listing = ({ listing }: TListing) => {
  const pageTitle = `SweetDeal - ${listing.title}`;
  return (
    <>
      <Head
        title={pageTitle}
        description="This page provides a way to search for available real estates"
      />
      <Header />
      <Main listing={listing} />
      <Footer />
    </>
  );
};

export default Listing;
