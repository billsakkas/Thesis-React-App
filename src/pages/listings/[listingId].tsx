import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import { RealEstateWithLocation } from "../../../prisma/types";
import Footer from "../../components/features/Footer";
import Header from "../../components/features/Header";
import Chip from "../../components/primitive/Chip";
import Head from "../../components/primitive/Head";
import { CiLocationOn } from "react-icons/ci";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { FaHammer } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { trpc } from "../../utils/trpc";
const prisma = new PrismaClient();

type TListingTitle = {
  title: string;
  address: string;
  city: string;
  country: string;
};

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
    <div className="mb-4">
      <MainImage listing={listing} />

      <ListingTitle
        title={listing.title}
        address={listing.location!.address}
        city={listing.location!.city}
        country={listing.location!.country}
      />

      <FeatureChips listing={listing} />

      <ListingDescription listing={listing} />

      <ContactForm />
    </div>
  );
};

const MainImage = ({ listing }: TListing) => {
  return (
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
  );
};

const ListingTitle = ({ title, address, city, country }: TListingTitle) => {
  return (
    <div className="px-4">
      <h3 className="text-2xl">{`${title}`}</h3>
      <div className="flex flex-row items-center">
        <CiLocationOn />
        <span className="text-sm text-slate-500">{`${address}, ${city}, ${country}`}</span>
      </div>
    </div>
  );
};

const FeatureChips = ({ listing }: TListing) => {
  const sqmeters = `${listing.sqmeters}m²`;
  const lotSize = `${listing.lotSize}m²`;

  return (
    <div className="mt-2">
      <div className="flex flex-row gap-2 overflow-x-scroll">
        <div className="ml-2" />
        <Chip Icon={BiBed} text={`${listing.bedrooms}`} />
        <Chip Icon={BiBath} text={`${listing.bathrooms}`} />
        <Chip Icon={FaHammer} text={`${listing.yearBuilt}`} />
        <Chip Icon={BiArea} text={`${sqmeters}`} />
        <Chip Icon={SlSizeFullscreen} text={`${lotSize}`} />
        <div className="mr-2" />
      </div>
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

const ContactForm = () => {
  const contactFormMutation = trpc.useMutation("contact.contactForm", {
    onSuccess: ({ response }) => alert(response),
    onError: (err) => alert(err.message),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    contactFormMutation.mutate({
      name: data.name as string,
      email: data.email as string,
      message: data.message as string,
    });
    e.currentTarget.reset();
  };

  return (
    <div className="mx-4 mt-4 rounded-xl">
      <h3 className="text-xl">Contact landlord</h3>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Example: John Doe"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Example: johndoe@email.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Example: Im interested in this listing, could you please share more information?"
          ></textarea>
        </div>
        <button
          className="mt-2 rounded-md bg-orange-500 p-2 text-white shadow-lg shadow-orange-100"
          disabled={contactFormMutation.isLoading}
          type="submit"
        >
          Send Message
        </button>

        <div className="mt-1">
          <p className="text-center text-sm text-gray-500">
            By clicking the button, you agree to our
            <br />
            <a href="#" className="text-green-500">
              Terms and Conditions
            </a>
          </p>
        </div>
      </form>
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
