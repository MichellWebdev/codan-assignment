import React, { useState, useEffect } from 'react';

// API
import { getContactInfo } from '../../services/contactApi';

// Components
import { SearchBar } from '../../common/search-bar/search-bar';
import { ContactList } from '../../common/contact-list/contact-list';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';

export const ContactListSearch = () => {
  // Search field with a default value of an empty string
  const [searchField, setSearchField] = useState('');

  const [contacts, setContacts] = useState<EmployeeLabels[]>([]);

  // Retrieve data from API
  useEffect(() => {
    getContactInfo().then(data => setContacts(data));
  }, []);

  // Search functionality on first and last name
  const filteredEmployees = contacts.filter(employee => {
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
