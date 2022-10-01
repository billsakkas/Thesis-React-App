import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import CircularButton from "../primitive/CircularButton";
import SegmentedButtons from "./SegmentedButtons";

export type TSearchHeader = {
  Inputs?: TInputs;
};

const segmentedButtons = [
  {
    id: 0,
    title: "Rent",
  },
  {
    id: 1,
    title: "Buy",
  },
];

const realEstateTypes = [
  {
    id: 0,
    title: "House",
  },
  {
    id: 1,
    title: "Office",
  },
  {
    id: 2,
    title: "Land",
  },
  {
    id: 3,
    title: "Etc",
  },
];

export type TInputs = {
  location: string;
  startingPrice: string;
  endingPrice: string;
  startingArea: string;
  endingArea: string;
  realEstateType: string;
  searchType: string;
};

const SearchHeader = ({ Inputs }: TSearchHeader) => {
  const router = useRouter();
  const [searchInputs, setSearchInputs] = React.useState<TInputs>(
    Inputs || {
      location: "",
      startingPrice: "",
      endingPrice: "",
      startingArea: "",
      endingArea: "",
      realEstateType: "",
      searchType: "",
    }
  );

  const [searchType, setSearchType] = React.useState<string>(
    Inputs?.searchType || "0"
  );
  const [realEstateType, setRealEstateType] = React.useState<string>(
    Inputs?.realEstateType || "0"
  );
  console.log(`realEstateType ${realEstateType}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        ...searchInputs,
        searchType,
        realEstateType,
      },
    });
  };

  return (
    <form className="mb-8" onSubmit={handleSubmit}>
      <div className="flex flex-row items-center justify-center gap-2">
        <h2 className="text-center text-xl font-semibold">
          Find your perfect home
        </h2>
        <img src="https://img.icons8.com/emoji/48/000000/smiling-face-with-hearts.png" />
      </div>
      <div className="mt-4 flex flex-col gap-4 px-8">
        <SegmentedButtons
          buttons={segmentedButtons}
          activeButton={searchType}
          setActiveButton={setSearchType}
        />
        <div className="flex flex-row items-center justify-center gap-2">
          {realEstateTypes.map((button) => (
            <CircularButton
              key={button.id}
              title={button.title}
              isActive={`${button.id}` === realEstateType}
              onClick={() => setRealEstateType(`${button.id}`)}
            />
          ))}
        </div>
        <div className="h-fit divide-y overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="flex h-12 flex-row items-center justify-start gap-1">
            <img
              className="h-7"
              src="https://img.icons8.com/ios-glyphs/30/000000/marker--v1.png"
            />
            <input
              className="h-full grow"
              type="text"
              name="location"
              id="location"
              placeholder="London, UK"
              onChange={handleChange}
              value={searchInputs["location"]}
            />
          </div>
          <div className="flex h-12 flex-row divide-x">
            <div className="flex w-1/2 items-center gap-1 pl-2">
              <span>$</span>
              <input
                className="h-full w-full"
                type="number"
                name="startingPrice"
                id="startingPrice"
                placeholder="Starting price"
                onChange={handleChange}
                value={searchInputs["startingPrice"]}
              />
            </div>
            <div className="flex w-1/2 items-center gap-1 pl-2">
              <span>$</span>
              <input
                className="h-full w-full"
                type="number"
                name="endingPrice"
                id="endingPrice"
                placeholder="Ending price"
                onChange={handleChange}
                value={searchInputs["endingPrice"]}
              />
            </div>
          </div>
          <div className="flex h-12 w-full divide-x">
            <div className="flex w-1/2 items-center gap-1 pl-2">
              <span>m2</span>
              <input
                className="h-full w-full"
                type="number"
                name="startingArea"
                id="startingArea"
                placeholder="Starting m2"
                onChange={handleChange}
                value={searchInputs["startingArea"]}
              />
            </div>
            <div className="flex w-1/2 items-center gap-1 pl-2">
              <span>m2</span>
              <input
                className="h-full w-full"
                type="number"
                name="endingArea"
                id="endingArea"
                placeholder="Ending m2"
                onChange={handleChange}
                value={searchInputs["endingArea"]}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="h-10 rounded-lg bg-orange-400 text-white shadow-lg shadow-orange-300"
        >
          Search
        </button>
        <h3>type: {typeof searchInputs["startingPrice"]}</h3>
      </div>
    </form>
  );
};

export default SearchHeader;
