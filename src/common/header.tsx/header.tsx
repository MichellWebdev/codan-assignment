import React from 'react';

// Images
import logo from '../../utils/assets/codan-logo.png';

// Styles
import './header.scss';

export const Header = () => {
  return (
    <div className='header row'>
      <div className='col-auto'>
        <img className='header__logo' src={logo} alt='codan logo' />
      </div>
      <div className='col-auto'>
        <h1>Medarbejdere</h1>
      </div>
    </div>
  );
};
