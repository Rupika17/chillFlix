import React, { useState } from "react";
import Banner from "../Components/Home/Banner";
import TopRated from "../Components/Home/TopRated";
import Layout from "../Layout/Layout";
import axios from 'axios';

function HomeScreen() {
  const [searchedMovies, setsearchedMovies] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "https://www.omdbapi.com/?apikey=63440ab";
  const search = (e) => {
    if (e.key === "Enter") {
      searchButtonClick();
    }
  };
  const searchButtonClick = () => {
    axios(apiurl + "&s=" + searchedMovies.s).then((data) => {
      let results = data?.data?.Search;
      setsearchedMovies((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };
  const handleInput = (e) => {
    let s = e.target.value;
    setsearchedMovies((prevState) => {
      return { ...prevState, s: s };
    });
  };
  return (
    <Layout handleInput={handleInput} search={search} searchButtonClick={searchButtonClick}>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner results={searchedMovies} />
        {/* <PopularMovies /> */}
        {/* <Promos /> */}
        <TopRated />
      </div>
    </Layout>
  );
}

export default HomeScreen;
