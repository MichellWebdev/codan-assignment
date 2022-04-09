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

export const SearchContacts = () => {
  const dispatch = useDispatch();

  // Search field with a default value of an empty string
  const [searchField, setSearchField] = useState('');

  // Retrieve data
  const employeeArray = useSelector((state: RootState) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

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
