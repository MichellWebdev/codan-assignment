import React from 'react';

// Common
import { Header } from './common/header.tsx/header';

// Components
import { ContactList } from './components/contact-list/contact-list';

// Styles
import './utils/shared-styles.scss';

export const App = () => {
  return (
    <>
      <Header />
      <ContactList />
    </>
  );
};
