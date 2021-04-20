import React from 'react';
import '../../App.css';
import HomePage from '../HomePage';
import Footer from '../Footer';
import AboutMe from '../Aboutme';


function Home() {
  return (
    <>
      <HomePage />
      <AboutMe/>
      <Footer />
    </>
  );
}

export default Home;
