import React from 'react'
import { useParams } from 'react-router-dom';
import { Movies } from '../Data/MoviesData';
import Layout from '../Layout/Layout'

function SingleMovie() {
    const {id}= useParams();
    const movie= Movies.find((movie)=> movie.Title === id);
  return (
    <Layout>
       <h1>{movie.Title}</h1>
    </Layout>
  )

}

export default SingleMovie