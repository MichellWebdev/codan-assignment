import React from 'react';

// Styles
import './search-bar.scss';

interface SearchBarProps {
  placeholder: string;
  handleSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ placeholder, handleSearch }: SearchBarProps) => {
  return (
    <div className='container-fluid'>
      <div className='row page-margin'>
        <form className='search-bar'>
          <input className='search-bar__input' type='search' placeholder={placeholder} onChange={handleSearch} />
        </form>
      </div>
    </div>
  );
};
