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

  // Save this API call and use it when you select a user, so it's the same results.
  // So the saved API call will be used in contact information.
  // Then in contact information you should probably use .find to match the clicked users key with the id in the API call
  // and then retrieve the information.

  // Remember to somehow store the clicked users key, so it's also in the contact information component

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
