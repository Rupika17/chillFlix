import React from "react";
import { Link, useParams } from "react-router-dom";
import { Movies } from "../Data/MoviesData";
import Layout from "../Layout/Layout";
import { AiOutlineFileSearch } from "react-icons/ai";
import Titles from "../Components/Titles";
import act1 from "../assets/images/movies/actors/1.jpg";
import act2 from "../assets/images/movies/actors/2.jpg";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function SearchedResults() {
  const { id } = useParams();
  const [movieList, setmovieList] = useState([]);
  const apiurl = "https://www.omdbapi.com/?apikey=63440ab";
  useEffect(() => {
    let mounted = true;
    axios(apiurl + "&s=" + id).then((data) => {
      let results = data?.data?.Search;
      console.log(results);
      setmovieList(results);
    });
    return () => (mounted = false);
  }, []);
  const Title = movieList?.length > 0 ? "Searched Results" : "No Results Found";
  return (
    <Layout>
      <div className="my-12">
        <Titles title={Title} Icon={AiOutlineFileSearch} />
      </div>
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {movieList && movieList?.length > 0
          ? movieList?.map((movie, index) => (
              <div className="border border-border p-1 hover:scale-105 transitions relative rounded overflow-hidden">
                <Link to={`/movies/${movie.name}`} className="w-full">
                  <img
                    src={movie?.Poster}
                    alt={movie?.Title}
                    className="w-full h-64 object-cover"
                  />
                </Link>
                <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacit-60 text-white px-4 py-3">
                  <h3 className="font-semibold truncate">{movie.Title}</h3>
                </div>
              </div>
            ))
          : null}
      </div>
    </Layout>
  );
}

export default SearchedResults;
