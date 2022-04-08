import { Link } from 'react-router-dom';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';

// Styles
import './employee.scss';

interface EmployeeProps {
  employee: EmployeeLabels;
}

export const Employee = ({ employee }: EmployeeProps) => {
  return (
    // Remove link and use a button instead to get some codan styling in too
    // Then pass the onclick of the button as just a function prop
    // In ContactList the function prop should be as the example shows and with state still as a prop
    // At last in SearchContacts the state should be the state that's saved in redux
    <Link to='/details'>
      <div className='container-fluid'>
        <div className='row align-items-center page-margin employee-card'>
          <div className='col-4 col-sm-3 col-md-2'>
            <img src={employee.picture.medium} alt='profile image' />
          </div>
          <div className='col-8 col-sm-9 col-md-10'>
            <div className='row'>
              <div className='col-md-4'>
                <p>
                  Name: {employee.name.first} {employee.name.last}
                </p>
              </div>
              <div className='col-md-4'>
                <p>Phone: {employee.phone} </p>
              </div>
              <div className='col-md-4'>
                <p>Mobile: {employee.cell} </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <p>E-mail: {employee.email} </p>
              </div>
              <div className='col-md-4'>
                <p>Country: {employee.location.country} </p>
              </div>
              <div className='col-md-4'>
                <p>Nationality: {employee.nat} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
