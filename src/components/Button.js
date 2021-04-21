import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

{/*    Array of styles  */}

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];


{/*    Array of sizes  */}

const SIZES = ['btn--medium', 'btn--large'];


{/* My Button */}

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

{/*  Default button if clicked on will port to Beer page  */}

  return (
    <Link to='/Beer' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
