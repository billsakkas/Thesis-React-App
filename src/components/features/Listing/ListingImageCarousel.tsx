import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

type TListingImageCarousel = {
  images?: string[];
};

const ListingImageCarousel = ({ images }: TListingImageCarousel) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const pictures = images?.map((image, index) => (
    <SwiperSlide key={index}>
      <img src={image} />
    </SwiperSlide>
  ));

  return (
    <div className="mx-4 mt-4 flex h-96 flex-col gap-4">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#faf",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-2xl"
      >
        {pictures}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-2xl"
      >
        {pictures}
      </Swiper>
    </div>
  );
};

export default ListingImageCarousel;
