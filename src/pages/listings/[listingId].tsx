import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import { RealEstateWithLocation } from "../../../prisma/types";
import Footer from "../../components/features/Footer";
import Header from "../../components/features/Header";
import Head from "../../components/primitive/Head";

const prisma = new PrismaClient();

type TListing = {
  listing: RealEstateWithLocation;
};

type TMain = {
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
  const sqmeter = `${listing.lotSize.toLocaleString("eu", {
    style: "unit",
    unit: "meter",
    unitDisplay: "narrow",
  })}`;

  return (
    <div>
      <div className="relative">
        <Image
          layout="intrinsic"
          objectFit="contain"
          width={639}
          height={426}
          src="https://source.unsplash.com/random/300x200"
          priority
        />
      </div>
      <div className="px-4">
        <h3 className="text-xl">
          {`${listing.title} - ${sqmeter}`}
          <sup>2</sup>
        </h3>
        <p className="">
          {`${listing.location?.address}, ${listing.location?.city}`}
          <br />
          {`${listing.location?.zip}, ${listing.location?.country}`}
        </p>
      </div>
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
