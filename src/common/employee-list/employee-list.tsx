// Components
import { Employee } from '../employee/employee';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';

interface EmployeeListProps {
  filteredEmployees: EmployeeLabels[];
}

export const EmployeeList = ({ filteredEmployees }: EmployeeListProps) => {
  const filtered = filteredEmployees.map((employee: EmployeeLabels, index: number) => {
    return <Employee key={employee.id.value !== null ? employee.id.value : index} employee={employee} />;
  });

  return <div>{filtered}</div>;
};
