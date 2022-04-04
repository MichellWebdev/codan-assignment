import React from 'react';

// Common
import { Header } from './common/header/header';
import { SearchBar } from './common/search-bar/search-bar';

// Components
import { ContactList } from './components/contact-list/contact-list';

// Styles
import './utils/shared-styles.scss';

export const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <ContactList />
    </>
  );
};
