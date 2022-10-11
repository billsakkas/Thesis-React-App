import { Prisma } from "@prisma/client";

const realEstateWithLocation = Prisma.validator<Prisma.RealEstateListingArgs>()(
  {
    include: { location: true },
  }
);

export type RealEstateWithLocation = Prisma.RealEstateListingGetPayload<
  typeof realEstateWithLocation
>;
