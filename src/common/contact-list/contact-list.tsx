// Components
import { Employee } from '../../common/employee/employee';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';

interface ContactListProps {
  filteredEmployees: EmployeeLabels[];
}

export const ContactList = ({ filteredEmployees }: ContactListProps) => {
  const filtered = filteredEmployees.map((employee: EmployeeLabels, index: number) => {
    return <Employee key={employee.id.value !== null ? employee.id.value : index} employee={employee} />;
  });

  return <div>{filtered}</div>;
};
