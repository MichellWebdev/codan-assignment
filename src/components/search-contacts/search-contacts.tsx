import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../..';
import { fetchEmployees } from '../../services/actions/employeeAction';

// Components
import { SearchBar } from '../../common/search-bar/search-bar';
import { ContactList } from '../../common/contact-list/contact-list';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';

export const SearchContacts = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // Mounted component
  const [contactsMounted, setContactsMounted] = useState(false);

  // Search field with a default value of an empty string
  const [searchField, setSearchField] = useState('');

  // Retrieve data from redux
  let employeeArray = useSelector((state: RootState) => state.employee);

  // Retrieve data from state
  const state = location.state as EmployeeLabels[];

  if (state === null && !contactsMounted) {
    dispatch(fetchEmployees());
  }

  if (state !== null) {
    employeeArray = state;
  }

  useEffect(() => {
    setContactsMounted(true);
  });

  // Search functionality on first and last name
  const filteredEmployees = employeeArray.filter((employee: EmployeeLabels) => {
    return (
      employee.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
      employee.name.last.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
  };

  return (
    <>
      <SearchBar placeholder='Search employee name' handleSearch={handleSearch} />
      <ContactList filteredEmployees={filteredEmployees} />
    </>
  );
};
