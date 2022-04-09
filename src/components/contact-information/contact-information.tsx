import { Link, useLocation } from 'react-router-dom';

// Redux
import { RootState } from '../..';
import { useSelector } from 'react-redux';

// Component
import { DetailedContact } from '../../common/detailed-contact/detailed-contact';
import { Header } from '../../common/header/header';
import { Button } from '../../common/button/button';

interface EmployeeId {
  id: {
    value: string;
  };
  employeeId: string;
}

export const ContactInformation = () => {
  const location = useLocation();

  // State should not only store the id but also the whole array since otherwise it won't work
  // When a reload happens because the array will be empty

  // Fetch employee ID from previous page
  // const locationState = location.state as EmployeeId;
  const locationState = location.state as any;
  const { employeeId } = locationState;
  const id = employeeId;

  console.log('location.stateArray', locationState.array);

  // Fetch employee array
  const employeeArray = useSelector((state: RootState) => state.employee);

  console.log('employeeArrayDetailsPage', employeeArray);

  // if (employeeArray === []) {
  //   employeeArray = locationState.array;
  // }

  // Find the id from location.state that matches the id in the employeeArray
  // const findSelectedEmployee = employeeArray.find((employeeId: EmployeeId) => employeeId.id.value === id);

  // console.log('findSelectedEmployee', findSelectedEmployee);

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row page-margin'>
          <Link to='/' state={{ array: employeeArray }}>
            <Button buttonText='Back to list' />
          </Link>
        </div>
      </div>
      <DetailedContact details={locationState.array} />
    </>
  );
};
