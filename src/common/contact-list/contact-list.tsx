import { Link, useNavigate } from 'react-router-dom';

// Components
import { Employee } from '../../common/employee/employee';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';

interface ContactListProps {
  filteredEmployees: EmployeeLabels[];
  // employeeId: string;
}

export const ContactList = ({ filteredEmployees }: ContactListProps) => {
  const navigate = useNavigate();

  const filtered = filteredEmployees.map((employee: EmployeeLabels, index: number) => {
    console.log('employee', employee);
    // const toDetailsPage = () => {
    //   navigate('../../components/contact-information', { state: employee.id.value });
    // };
    return (
      // <Link key={employee.id.value !== null ? employee.id.value : index} to='/details' state={employeeId}>
      <Employee key={employee.id.value !== null ? employee.id.value : index} employee={employee} />
      // </Link>
    );
  });

  return <div>{filtered}</div>;
};
