import React, { useState } from 'react'
import { BsBookmarkStar, BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MoviesData';
import Rating from '../Rating';
import Titles from '../Titles'

function TopRated() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames = "hover:bg-dry transaction text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";
  

  return (
    <div className="my-16">
      <Titles title="Top 8 Movies" Icon={BsBookmarkStar} />
      <div className="mt-19">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-12 h-12 flex-colo transition hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>
                  <Link
                    className="font-semibold text-xl trancuted line-clamp-2"
                    to={`/movie/${movie.Title}`}
                  >
                    {movie.Title}
                  </Link>
                  <div className='flex gap-2 text-start'>
                    <Rating value={movie.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=' w-full px-1 flex-rows gap-6 pt-12'>
          <button className={classNames} ref={(node)=> setPrevEl(node)}>
          <BsCaretLeftFill />
          </button> 
          <button className={classNames} ref={(node)=> setNextEl(node)}>
          <BsCaretRightFill />
          </button> 
        </div>
      </div>
    </div>
  );
}

export default TopRated