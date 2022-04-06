import { useState, useEffect } from 'react';

// API
import { getDetailedContactInfo } from '../../services/contactApi';

// Component
import { DetailedContact } from '../../common/detailed-contact/detailed-contact';

// Labels
import { DetailedLabels } from '../../utils/labels/detailed-labels';

export const ContactInformation = () => {
  const [detailedContact, setDetailedContact] = useState<DetailedLabels[]>([]);

  // Retrieve data from API
  useEffect(() => {
    getDetailedContactInfo().then(data => setDetailedContact(data));
  }, []);

  console.log('detailedContact', detailedContact);

  const testMap = detailedContact.map((contactInformation: DetailedLabels, index: number) => (
    <DetailedContact key={index} details={contactInformation} />
  ));

  return <div>{testMap}</div>;
};
