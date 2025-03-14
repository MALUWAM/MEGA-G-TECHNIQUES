// components/ImageCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PhotoCarousel.css"

import one from "../assets/3D GRAPHICS DESIGN/1.png";
import two from "../assets/3D GRAPHICS DESIGN/2.png";
import three from "../assets/3D GRAPHICS DESIGN/3.png";

const images = [one, two, three];



const PhotoCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full max-w-3xl"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`one ${index}`} className="w-full h-auto rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoCarousel;
