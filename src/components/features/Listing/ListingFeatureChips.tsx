import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaHammer } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { RealEstateWithLocation } from "../../../../prisma/types";
import Chip from "../../primitive/Chip";

type TListingFeatureChips = {
  listing: RealEstateWithLocation;
};

const ListingFeatureChips = ({ listing }: TListingFeatureChips) => {
  const sqmeters = `${listing.sqmeters}m²`;
  const lotSize = `${listing.lotSize}m²`;

  return (
    <div className="mt-2">
      <div className="flex flex-row gap-2 overflow-x-auto">
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

export default ListingFeatureChips;
