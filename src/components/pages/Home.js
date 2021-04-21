import React from 'react';
import '../../App.css';
import HomePage from '../HomePage';
import Footer from '../Footer';
import AboutMe from '../Aboutme';

{/* This is my Home page

When <Home/> is called in App() it will render this function.
Func Home() will render HomePage, AboutMe, and Footer

*/}

function Home() {
  return (
    <>
      <HomePage />  {/* My top part of home page*/}
      <AboutMe/>   {/*This is my AboutMe which will render in the middle of the page*/}
      <Footer />   {/*Footer this will render on the Home page*/}
    </>
  );
}

export default Home;
