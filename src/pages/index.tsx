import type { NextPage } from "next";
import Navbar from "../components/features/Navbar";
import Layout from "../components/layout/Layout";
import Map from "../components/features/Map";
import MapSideBarEstate from "../components/features/MapSideBarEstate";
import MapSideBar from "../components/features/MapSideBar";
import MapMarker from "../components/primitive/MapMarker";
// import { trpc } from "../utils/trpc";

const realEstates = [
  {
    id: "1",
    name: "Masion",
    price: "1.500.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A great place to live",
    image: "https://picsum.photos/seed/a/128/210",
    stars: 5,
    location: {
      lat: 40.272,
      lng: 22.509,
    },
  },
  {
    id: "2",
    name: "Loft",
    price: "5.000.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A gorgeous place to sleep",
    image: "https://picsum.photos/seed/b/128/210",
    stars: 4,
    location: {
      lat: 40.271,
      lng: 22.508,
    },
  },
  {
    id: "3",
    name: "Cozy house",
    price: "5.000.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A gorgeous place to sleep",
    image: "https://picsum.photos/seed/c/128/210",
    stars: 3,
    location: {
      lat: 40.273,
      lng: 22.508,
    },
  },
  {
    id: "4",
    name: "Apartment",
    price: "5.000.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A gorgeous place to sleep",
    image: "https://picsum.photos/seed/d/128/210",
    stars: 2,
    location: {
      lat: 40.272,
      lng: 22.506,
    },
  },
  {
    id: "5",
    name: "Villa",
    price: "5.000.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A gorgeous place to sleep",
    image: "https://picsum.photos/seed/e/128/210",
    stars: 1,
    location: {
      lat: 40.274,
      lng: 22.508,
    },
  },
  {
    id: "6",
    name: "Pool house",
    price: "5.000.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A gorgeous place to sleep",
    image: "https://picsum.photos/seed/f/128/210",
    stars: 5,
    location: {
      lat: 40.271,
      lng: 22.51,
    },
  },
  {
    id: "7",
    name: "Club house",
    price: "5.000.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A gorgeous place to sleep",
    image: "https://picsum.photos/seed/g/128/210",
    stars: 4,
    location: {
      lat: 40.272,
      lng: 22.508,
    },
  },
  {
    id: "8",
    name: "Maisonette",
    price: "5.000.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A gorgeous place to sleep",
    image: "https://picsum.photos/seed/h/128/210",
    stars: 3,
    location: {
      lat: 40.273,
      lng: 22.509,
    },
  },
  {
    id: "9",
    name: "Skyscraper",
    price: "5.000.000",
    address: "Αθηνα, Αγγελίας Παρασκευής, Αγ. Παρασκευής, Αγ. Παρασκευής",
    description: "A gorgeous place to sleep",
    image: "https://picsum.photos/seed/picsum/128/210",
    stars: 2,
    location: {
      lat: 40.274,
      lng: 22.506,
    },
  },
];

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Layout Header={<Navbar />}>
        <div className=" absolute left-0 top-0 z-10 flex h-full flex-col gap-2 overflow-auto bg-white text-white ">
          <MapSideBar>
            {realEstates.map((estate) => (
              <MapSideBarEstate
                key={estate.id}
                id={estate.id}
                name={estate.name}
                price={estate.price}
                address={estate.address}
                description={estate.description}
                image={estate.image}
                stars={estate.stars}
              />
            ))}
          </MapSideBar>
        </div>
        <div className="h-full w-full bg-white">
          {/* <div className="flex flex-col items-center justify-center p-8">
            <MapMarker text={"estate.name"} lat={12.23} lng={12.23} />
          </div> */}
          <Map>
            {realEstates.map((estate) => (
              <MapMarker
                text={estate.name}
                lat={estate.location.lat}
                lng={estate.location.lng}
              />
            ))}
          </Map>
        </div>
      </Layout>
    </>
  );
};

export default Home;
