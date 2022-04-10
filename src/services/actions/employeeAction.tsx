export const baseUrl = 'https://randomuser.me/api/';

export const contactInformation = `${baseUrl}?results=25&inc=name,email,phone,cell,nat,location,picture,id,dob`;

export const fetchEmployees = () => {
  return async (dispatch: any) => {
    const connection = await fetch(contactInformation);

    const jResponse = await connection.json();

    const employeeData = jResponse.results;

    if (!connection.ok) {
      console.log('error');
    } else {
      dispatch({ type: 'EMPLOYEE', payload: employeeData });
    }
  };
};
