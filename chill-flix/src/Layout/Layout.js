import React from 'react'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'

function Layout({children,handleInput,search,searchButtonClick}) {
  return (
    <>
    <div className='bg-main text-white'>
        <NavBar handleInput={handleInput} search={search} searchButtonClick={searchButtonClick}/>
        {children}
        <Footer />
    </div>
    </>
  )
}

export default Layout