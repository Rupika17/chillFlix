import React from 'react'
import Head from '../Components/Head'
import Layout from '../Layout/Layout'
import aboutus from "../assets/images/movies/aboutus.jpg"

function AboutUs() {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title={"About Us"} image={aboutus} />
      </div>
    </Layout>
  )
}

export default AboutUs