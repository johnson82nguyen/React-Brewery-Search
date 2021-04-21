import React from 'react';
import '../../App.css';
import HomePage from '../HomePage';
import Footer from '../Footer';
import SearchBeers from '../SearchBeers';


{/*** This is my Beer page. When a user selects on Beer in the nav or the button on the homepage
    they will be redirected to this page!

    **
    */}
function Beer() {
  return (
    <>
      <SearchBeers />    {/* The main content of this page is the SearchBeers function which connects to Openbrewerydb api */}

      <Footer/>   {/* Footer at the bottom of the page to make sure page looks clean */}
    </>
  );
}

export default Beer;
