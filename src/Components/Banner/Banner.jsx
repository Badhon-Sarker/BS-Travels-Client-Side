
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><div className=" bg-slider-one h-96 bg-cover flex items-center p-4">
        <div className="text-white">
            <h1 className="text-2xl font-bold font-playfair my-2">It's time to </h1>
            <h1 className="text-5xl font-bold font-playfair my-2">Explore the world</h1>
            <p className="my-3">BS Travels: Your gateway to unforgettable journeys. From exotic destinations to bespoke adventures, we craft personalized experiences tailored to your desires. Let us guide you to your next dream destination with ease</p>
            </div>
            </div></SwiperSlide>

        <SwiperSlide><div className=" bg-slider-two h-96 bg-cover flex items-center p-4"><div className="text-white">
            <h1 className="text-2xl font-bold font-playfair my-2">It's time to </h1>
            <h1 className="text-5xl font-bold font-playfair my-2">Explore the world</h1>
            <p className="my-3">BS Travels: Your gateway to unforgettable journeys. From exotic destinations to bespoke adventures, we craft personalized experiences tailored to your desires. Let us guide you to your next dream destination with ease</p>
            </div></div></SwiperSlide>


        <SwiperSlide><div className=" bg-slider-three h-96 bg-cover flex items-center p-4"><div className="text-white">
            <h1 className="text-2xl font-bold font-playfair my-2">It's time to </h1>
            <h1 className="text-5xl font-bold font-playfair my-2">Explore the world</h1>
            <p className="my-3">BS Travels: Your gateway to unforgettable journeys. From exotic destinations to bespoke adventures, we craft personalized experiences tailored to your desires. Let us guide you to your next dream destination with ease</p>
            </div></div></SwiperSlide>

        <SwiperSlide><div className=" bg-slider-four h-96 bg-cover flex items-center p-4"><div className="text-white">
            <h1 className="text-2xl font-bold font-playfair my-2">It's time to </h1>
            <h1 className="text-5xl font-bold font-playfair my-2">Explore the world</h1>
            <p className="my-3">BS Travels: Your gateway to unforgettable journeys. From exotic destinations to bespoke adventures, we craft personalized experiences tailored to your desires. Let us guide you to your next dream destination with ease</p>
            </div></div></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;
