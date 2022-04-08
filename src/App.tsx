import React from 'react';
import { createStore } from 'redux';

// Reducer
import EmployeeReducer from './services/reducers/contactReducer';

// Components
import { Header } from './common/header/header';
import { ContactListSearch } from './components/search-contacts/search-contacts';

// Styles
import './utils/shared-styles.scss';

const store = createStore(EmployeeReducer);

store.subscribe(() => console.log(store.getState()));

export const App = () => {
  return (
    <>
      <Header />
      <ContactListSearch />
    </>
  );
};
