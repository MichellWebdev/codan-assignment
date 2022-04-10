export const employeeReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'EMPLOYEE':
      return action.payload;
    default:
      return state;
  }
};
