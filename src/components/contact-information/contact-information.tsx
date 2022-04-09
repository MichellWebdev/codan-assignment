import { useLocation } from 'react-router-dom';

// Redux
import { RootState } from '../..';
import { useSelector } from 'react-redux';

// Component
import { DetailedContact } from '../../common/detailed-contact/detailed-contact';

interface EmployeeId {
  id: {
    value: string;
  };
  employeeId: string;
}

export const ContactInformation = () => {
  const location = useLocation();

  // Fetch employee ID from previous page
  const state = location.state as EmployeeId;
  const { employeeId } = state;
  const id = employeeId;

  // Fetch employee array
  const employeeArray = useSelector((state: RootState) => state.employee);
  console.log('employeeArray1', employeeArray);

  // Find the id from location.state that matches the id in the employeeArray
  const findSelectedEmployee = employeeArray.find((employeeId: EmployeeId) => employeeId.id.value === id);

  return (
    <div>
      <DetailedContact details={findSelectedEmployee} />
    </div>
  );
};
