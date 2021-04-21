import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

{/* This is my Footer
** This will be seen at the bottom (foot) of every page within this app
** The Footer will contain information about Modus, and external links to their site
Footer will also contain the source code of this application 
  */}

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Openbrewerydb
        </p>
        <p className='footer-subscription-text'>
          Mess around with it and let me know what your favorite brewery is
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to={{ pathname: "https://gomodus.com" }} target = "_blank" className='social-logo'>
              Modus
              <i class="fas fa-lightbulb"></i>
            </Link>
          </div>

            <div id="div1">
              <Link to={{ pathname: "https://github.com" }} target = "_blank">
                check out that source code
              </Link>
            </div>


          <div class='social-icons'>
          <Link
            class='social-icon-link facebook'
            to={{ pathname: "https://www.facebook.com/ModusEngagement/" }}
            target='_blank'
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/modusengagement?lang=en" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://www.linkedin.com/company/modusengagement/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
