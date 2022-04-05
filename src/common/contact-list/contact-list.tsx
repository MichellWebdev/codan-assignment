import React from 'react';

// Components
import { Employee } from '../../common/employee/employee';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';

interface ContactListProps {
  filteredEmployees: any;
}

export const ContactList = ({ filteredEmployees }: ContactListProps) => {
  const filtered = filteredEmployees.map((employee: EmployeeLabels, index: number) => (
    <Employee key={index} employee={employee} />
  ));

  return <div>{filtered}</div>;
};
