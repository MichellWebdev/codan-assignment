// Components
import { Employee } from '../../common/employee/employee';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';

interface ContactListProps {
  filteredEmployees: EmployeeLabels[];
  state?: any;
}

export const ContactList = ({ filteredEmployees, state }: ContactListProps) => {
  const filtered = filteredEmployees.map((employee: EmployeeLabels, index?: number) => {
    console.log('employee', employee);
    // Function for useNavigate should probably be here and save state as employee
    state = employee;
    return (
      // Maybe have the useNavigate in here and wrap employee component in an a tag with an onclick
      // Based on this console.log I would say that navigate should be used in here and pass state as employee too
      <Employee key={employee.id.value !== null ? employee.id.value : index} employee={employee} />
    );
  });

  return <div>{filtered}</div>;
};
