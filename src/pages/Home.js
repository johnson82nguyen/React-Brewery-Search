import React from 'react';
import '../App.css';
import HomePage from '../components/HomePage/HomePage';
import Footer from '../components/Footer/Footer';
import AboutMe from '../components/AboutMe/AboutMe';

{/* This is my Home page

 When <Home/> is called in App() it will render this function.
 Home() will render HomePage, AboutMe, and Footer

*/}

function Home() {
  return (
    <>
      <HomePage />  {/* Home page */}
      <AboutMe/>   {/* This is my AboutMe which will render in the middle of the page */}
      <Footer />   {/* Footer this will render on the Home page but at the bottom  */}
    </>
  );
}

export default Home;
