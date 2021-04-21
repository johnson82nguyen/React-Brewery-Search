import React from 'react';
import '../../App.css';
import HomePage from '../HomePage';
import Footer from '../Footer';
import AboutMe from '../Aboutme';

{/* This is my Home page
    When <Home/> is called in App() it will render this function.
    Home() will display HomePage, AboutMe, and Footer
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
