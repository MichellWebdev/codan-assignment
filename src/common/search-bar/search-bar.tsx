import React from 'react';

import './search-bar.scss';

export const SearchBar = () => {
  return (
    <div className='container-fluid'>
      <div className='row page-margin'>
        <form className='search-bar'>
          <input className='search-bar__input' type='search' placeholder='Search' />
        </form>
      </div>
    </div>
  );
};
