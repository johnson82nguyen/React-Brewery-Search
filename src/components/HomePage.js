import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomePage.css';
import Typical from 'react-typical';

{/* This is my homepage*/}

function HomePage() {
  return (
    <div className='Home-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>John Nguyen</h1>
      <p>
      <Typical
      loop={Infinity}
      wrapper="b"
      steps={[
      "Hi Modus team!", 1500,
      "I'm a Software Engineer",2000,
      "I'm a Computer Scientist",2000,
      "I'm a UMN graduate",2000,
      "I'm a lover of all music",2000,
      "I'm a tennis/basketball player ",2000,
      "Welcome to my project!",7000]} />
      </p>
      <p>Final project for Modus</p>
      <div className='Home-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        {/* Button will default to /Beer page */}
          Click here to search for brewerys
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
