import React from 'react';

import { EMPLOYEES } from '../actions/contactAction';

// IDEA
// Reducer should take the state that we have, match it against a value that would be the selected user's id
// And then return only the object we need.
// Maybe this can't succeed and still needs to be done inside the ContactInformation component
// Or use dispatch inside ContactInformation??

const initialState = {
  employee: [],
};

const EmployeeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case EMPLOYEES:
      return {
        employee: state.employee,
      };
      break;

    // case SELECTED_EMPLOYEE: ??
    //

    default:
      return state;
  }
};

export default EmployeeReducer;
