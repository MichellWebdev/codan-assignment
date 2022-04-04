import React, { useState, useEffect } from 'react';

// API
import { getContactInfo } from '../../services/contactApi';

// Common components
import { Employee } from '../../common/employee/employee';

// Styles
import './contact-list.scss';

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContactInfo().then(data => setContacts(data));
  }, []);

  const contactInfo = contacts.map(
    ({ name: { first, last }, phone, cell, email, location: { country }, nat, picture: { medium } }, key) => (
      <Employee
        key={key}
        image={medium}
        firstName={first}
        lastName={last}
        phone={phone}
        cell={cell}
        email={email}
        country={country}
        nationality={nat}
      />
    )
  );

  return <div>{contactInfo}</div>;
};
