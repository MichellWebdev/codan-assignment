import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// API
import { getDetailedContactInfo } from '../../services/contactApi';

// Component
import { DetailedContact } from '../../common/detailed-contact/detailed-contact';

// Labels
import { DetailedLabels } from '../../utils/labels/detailed-labels';
import { RootState } from '../..';
import { useSelector } from 'react-redux';

interface EmployeeId {
  id: {
    value: string;
  };
}

interface Test {
  employeeId: string;
}

export const ContactInformation = () => {
  const location = useLocation();
  const state = location.state as Test;
  const { employeeId } = state;

  const realId = employeeId;

  // console.log('employeeId', realId);

  // console.log('employeeId', employeeId);

  const [detailedContact, setDetailedContact] = useState<DetailedLabels[]>([]);

  const employeeArray = useSelector((state: RootState) => state.employee);
  console.log('employeeArray1', employeeArray);

  // The null value should be the key from the selected employee
  const findSelectedEmployee = employeeArray.find((employeeId: EmployeeId) => employeeId.id.value === realId);
  console.log('findSelectedEmployee', findSelectedEmployee);

  // let getEmployees = window.sessionStorage.getItem('contactsArray');
  // getEmployees = JSON.parse(getEmployees || '{}');
  // console.log('getEmployees1', getEmployees);

  // Retrieve data from API
  // useEffect(() => {
  //   getDetailedContactInfo().then(data => setDetailedContact(data));
  // }, []);

  // console.log('detailedContact', detailedContact);

  // const testMap = findSelectedEmployee.map((findSelectedEmployee: DetailedLabels, index: number) => (
  //   <DetailedContact key={index} details={findSelectedEmployee} />
  // ));

  // return <div>{testMap}</div>;

  return (
    <div>
      <DetailedContact
        email={findSelectedEmployee.email}
        picture={findSelectedEmployee.picture.large}
        name={findSelectedEmployee.name}
        phone={findSelectedEmployee.phone}
        cell={findSelectedEmployee.cell}
        location={findSelectedEmployee.location}
        dob={findSelectedEmployee.dob}
        nat={findSelectedEmployee.nat}
      />
    </div>
  );
};
