import React from 'react'
import { FaUserFriends } from 'react-icons/fa';
import  { Autoplay } from 'swiper';
import {Swiper , SwiperSlide} from 'swiper/react'
import Titles from "../Titles";
import act1 from "../../assets/images/movies/actors/1.jpg";
import act2 from "../../assets/images/movies/actors/2.jpg";
import act3 from "../../assets/images/movies/actors/3.jpg";
import act4 from "../../assets/images/movies/actors/4.jpg";
import act5 from "../../assets/images/movies/actors/5.jpg";

function MovieCasts() {
  return (
    <div className="my-12">
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          module={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
        <SwiperSlide key={1}>
          <div className='w-full p-3 italic text-text rounded flex-colo bg-dry border bordergray-800'>
            <img src={act1} alt={act1} className="w-full h-64 object-cover rounded mb-4" />
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div className='w-full p-3 italic text-text rounded flex-colo bg-dry border bordergray-800'>
            <img src={act2} alt={act2} className="w-full h-64 object-cover rounded mb-4" />
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div className='w-full p-3 italic text-text rounded flex-colo bg-dry border bordergray-800'>
            <img src={act3} alt={act3} className="w-full h-64 object-cover rounded mb-4" />
          </div>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <div className='w-full p-3 italic text-text rounded flex-colo bg-dry border bordergray-800'>
            <img src={act4} alt={act4} className="w-full h-64 object-cover rounded mb-4" />
          </div>
        </SwiperSlide>
        <SwiperSlide key={5}>
          <div className='w-full p-3 italic text-text rounded flex-colo bg-dry border bordergray-800'>
            <img src={act5} alt={act5} className="w-full h-64 object-cover rounded mb-4" />
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MovieCasts