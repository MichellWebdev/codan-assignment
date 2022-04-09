import React from 'react';

import { getContactInfo } from '../contactApi';

const test = getContactInfo();

export const employeeReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'EMPLOYEE':
      return action.payload;
    default:
      return state;
  }
};
