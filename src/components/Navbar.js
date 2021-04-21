import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

{/* My Navigation Bar at the top of every page */}
function Navbar() {

  {/* Hooks used to check state of clicks and button */}
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  {/* Shows button, Button is responsive to window size, if the smaller the window, the button will turn false and disappear */}
  const showButton = () => {
    if (window.innerWidth <= 960) { setButton(false); }
    else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* Clicking Modus word or lightbulb icon this will direct to home page */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Modus
          <i class="fas fa-lightbulb"></i>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              {/* Clicking on Home word will navigate to Home page */}
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              {/* Clicking on Beer word will navigate to Beer page */}
              <Link
                to='/Beer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Beer
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
