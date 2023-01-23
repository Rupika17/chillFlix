import React, { useState } from "react";
import Banner from "../Components/Home/Banner";
import TopRated from "../Components/Home/TopRated";
import Layout from "../Layout/Layout";
import axios from 'axios';

function HomeScreen() {
 
  return (
    <Layout >
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        {/* <PopularMovies /> */}
        {/* <Promos /> */}
        <TopRated />
      </div>
    </Layout>
  );
}

export default HomeScreen;
