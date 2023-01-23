import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Movies } from "../Data/MoviesData";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart } from "react-icons/fa";

function WatchPage() {
  let { id } = useParams();
  const movie = Movies.find((movie) => movie.Title === id);
  const [play, setPlay] = useState(false);
  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/movie/${movie.Title}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold tex-dryGray"
          >
            <BiArrowBack />
            {movie?.Title}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>
            <button className="bg-subMain flex-rows gap-2 hover:text-main transitions  text-white rounded px-8 font-medium py-3 text-sm">
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>
        <div className="flex-btn sm:w-auto w-full">
            <iframe
            // className="w-full h-full sm:w-auto"
              width="800"
              height="400"
              src={"https://www.youtube.com/embed/rokGy0huYEA"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
      </div>
    </Layout>
  );
}

export default WatchPage;
