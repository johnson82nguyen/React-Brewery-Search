import React from 'react';
import '../App.css';
import HomePage from '../components/HomePage/HomePage';
import Footer from '../components/Footer/Footer';
import SearchBreweries from '../components/SearchBreweries/SearchBreweries';


{/*
    This is my Beer page. It contains 2 components, SearchBreweries and Footer. It will display both on this page.    
*/}

function Beer() {
  return (
    <>
      <SearchBreweries />    {/* The main content of this page is the SearchBreweries function which connects to Openbrewerydb api */}
      <Footer/>          {/* Footer at the bottom of the page to make sure page looks clean */}
    </>
  );
}

export default Beer;
