import React from 'react';
import '../../App.css';
import HomePage from '../HomePage';
import Footer from '../Footer';
import SearchBeers from '../SearchBeers';

function Beer() {
  return (
    <>
      <SearchBeers />

      <Footer/>
    </>
  );
}

export default Beer;
