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
import { Button } from '../../common/button/button';

export const SearchContacts = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // States
  const [contactsMounted, setContactsMounted] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  // Retrieve data from redux
  let employeeArray: EmployeeLabels[] = useSelector((state: RootState) => state.employee);

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

  // Search functionality on first name, last name or email
  const filteredEmployees = employeeArray.filter((employee: EmployeeLabels) => {
    return (
      employee.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
      employee.name.last.toLowerCase().includes(searchField.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
  };

  const handleSort = () => {
    employeeArray.sort((a, b) => a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase()));
    setButtonClicked(true);
  };

  return (
    <>
      <SearchBar placeholder='Search employee name or e-mail' handleSearch={handleSearch} />
      <div className='container-fluid'>
        <div className='row page-margin'>
          <div className='col-auto'>
            <Button onClick={handleSort} buttonText='Sort alphabetically' />
          </div>
        </div>
      </div>
      <ContactList filteredEmployees={filteredEmployees} />
    </>
  );
};
