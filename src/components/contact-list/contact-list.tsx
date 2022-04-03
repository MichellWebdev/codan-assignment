import React, { useState, useEffect } from 'react';

import { Employee } from './employee';

import './contact-list.scss';

export const ContactList = () => {
  const [contacts, setContacts] = useState();

  // Make individual contact as a component, then in here, import that component
  // And probably map it so that each indivudal prop will be compliant to whatever information there is
  return (
    <>
      <Employee />
      <Employee />
    </>
  );
};
