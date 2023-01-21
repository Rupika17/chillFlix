import React from 'react'


function Head({title}) {
  return (
    <div className="w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md">
      {/* <img
        src='https://m.media-amazon.com/images/M/MV5BMzNhNjI1NDItZDUwOS00NGE5LWI1ODEtZjA5Yzk2YjAyMTY3XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg'
        alt="aboutus"
        className="=w-full h-full object-cover"
      /> */}
      <div className="absolute lg:top-24 top-16 w-full flex-colo">
        <h1 className="text-2xl lg:text-h1 text-white text-center font-bold">
         {title && title}
        </h1>
      </div>
    </div>
  ); 
}

export default Head