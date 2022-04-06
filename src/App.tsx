import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Components
import { Header } from './common/header/header';
import { ContactListSearch } from './components/search-contacts/search-contacts';

// Styles
import './utils/shared-styles.scss';

export const App = () => {
  return (
    <>
      <Header />
      <ContactListSearch />
    </>
  );
};
