import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import HomeScreen from './Screens/HomeScreen';
import Movies from './Screens/Movies';
import NotFound from './Screens/NotFound';
import SearchedResults from './Screens/SearchedResults';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';

function App() {
  return (
   <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/movie/:id" element={<SingleMovie />} />
    <Route path="/watch/:id" element={<WatchPage />} />
    <Route path="/search/:id" element={<SearchedResults />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  );
}

export default App
