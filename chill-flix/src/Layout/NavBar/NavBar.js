import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {FaHeart, FaSearch} from 'react-icons/fa'
import {CgUser} from 'react-icons/cg'
import { useState } from 'react';

function NavBar() {
    const hover="hover:text-subMain transition text-white"
    const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover);
    const [searchText, setsearchText] = useState("")
   
    const handleInput = (e) => {
      let s = e.target.value;
      setsearchText(s);
    };
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          {/* Logo */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <BsFillCollectionPlayFill
                size={30}
                className="w-full h-12 object-contain"
              />
            </Link>
          </div>
          {/* Search Form, */}
          <div className="col-span-3">
            <div className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <Link  to={`/search/${searchText}`}>
              <button
                type="submit"
                className="bg-subMain w-12 flex-colo h-12 rounded text-white"
                //onClick={searchButtonClick}
              >
                <FaSearch />
              </button>
              </Link>
              <input
                type="text"
                placeholder="Search Movie"
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
                onChange={handleInput}
                //onKeyDown={search}
              />
            </div>
          </div>
          {/* Menu */}
          <div className=" col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            {/* <NavLink to="/movies" className={Hover}>
                Movies
            </NavLink> */}
            <NavLink to="/about-us" className={Hover}>
                About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
                Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
                <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink to="/favorite" className={Hover}>
                <FaHeart className='w-6 h-6' />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar