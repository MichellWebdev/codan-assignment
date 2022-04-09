import React, { useState, useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../..';
import { fetchEmployees } from '../../services/actions/employeeAction';

// Components
import { SearchBar } from '../../common/search-bar/search-bar';
import { ContactList } from '../../common/contact-list/contact-list';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';
import { useLocation } from 'react-router-dom';

export const SearchContacts = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const state = location.state as any;
  console.log('state', state);

  // Mounted component
  const [contactsMounted, setContactsMounted] = useState(false);

  // Search field with a default value of an empty string
  const [searchField, setSearchField] = useState('');

  // Retrieve data from redux
  let employeeArray = useSelector((state: RootState) => state.employee);

  if (state === null && !contactsMounted) {
    dispatch(fetchEmployees());
  }

  if (state !== null) {
    employeeArray = state.array;
  }

  // Instead of dispatching here create a useState like the chats from native exam
  // if component is mounted then set to true or false and then depending on that
  // dispatch(fetchEmployees())
  // Then say that the filteredEmployees should be whatever the state is??

  useEffect(() => {
    setContactsMounted(true);
  });
  console.log('employeeArrayReload', employeeArray);

  // Search functionality on first and last name
  const filteredEmployees = employeeArray.filter((employee: EmployeeLabels) => {
    return (
      employee.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
      employee.name.last.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  console.log('filteredEmployees', filteredEmployees);

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
