import React from 'react';

import { EmployeeLabels } from '../../utils/labels/employee-labels';

export const EMPLOYEES = 'EMPLOYEES';

export const baseUrl = 'https://randomuser.me/api/';
export const contactInformation = `${baseUrl}?results=15&inc=name,email,phone,cell,nat,location,picture,id`;

export const detailedInformation = `${baseUrl}??exc=login`;

// export const employees = (employee: EmployeeLabels) => {
export const employees = () => {
  // return { type: EMPLOYEES, payload: employee };
  return async (dispatch: any) => {
    const connection = await fetch(contactInformation, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (connection.status !== 200) {
      console.log('error');
      return;
    }

    const jResponse = await connection.json();
    console.log('jResponse', jResponse);

    return dispatch({ type: EMPLOYEES, payload: jResponse.results });
  };
};
