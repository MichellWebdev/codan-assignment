import { useState, useEffect } from 'react';

// API
import { getDetailedContactInfo } from '../../services/contactApi';

// Component
import { DetailedContact } from '../../common/detailed-contact/detailed-contact';

// Labels
import { DetailedLabels } from '../../utils/labels/detailed-labels';
import { RootState } from '../..';
import { useSelector } from 'react-redux';

export const ContactInformation = () => {
  const [detailedContact, setDetailedContact] = useState<DetailedLabels[]>([]);

  const employeeArray = useSelector((state: RootState) => state.employee);
  console.log('employeeArray1', employeeArray);

  const findSelectedEmployee = employeeArray.find((employeeId: any) => employeeId.id.value === '829304272');
  console.log('findSelectedEmployee', findSelectedEmployee);

  // let getEmployees = window.sessionStorage.getItem('contactsArray');
  // getEmployees = JSON.parse(getEmployees || '{}');
  // console.log('getEmployees1', getEmployees);

  // Retrieve data from API
  // useEffect(() => {
  //   getDetailedContactInfo().then(data => setDetailedContact(data));
  // }, []);

  // console.log('detailedContact', detailedContact);

  const testMap = detailedContact.map((contactInformation: DetailedLabels, index: number) => (
    <DetailedContact key={index} details={contactInformation} />
  ));

  return <div>{testMap}</div>;
};
