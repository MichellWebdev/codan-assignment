import { Link } from 'react-router-dom';

// Labels
import { EmployeeLabels } from '../../utils/labels/employee-labels';
import { Button } from '../button/button';

// Styles
import './employee.scss';

interface EmployeeProps {
  employee: EmployeeLabels;
}

export const Employee = ({
  employee,
  employee: {
    id: { value },
  },
}: EmployeeProps) => {
  return (
    <Link to='/details' state={employee}>
      <div className='container-fluid'>
        <div className='row align-items-center page-margin employee-card'>
          <div className='col-4 col-sm-3 col-md-2'>
            <img src={employee.picture.medium} alt='profile image' />
          </div>
          <div className='col-8 col-sm-9 col-md-10'>
            <div className='row'>
              <div className='col-md-4'>
                <p>
                  <b>Name:</b> {employee.name.first} {employee.name.last}
                </p>
              </div>
              <div className='col-md-4'>
                <p>
                  <b>Phone:</b> {employee.phone}{' '}
                </p>
              </div>
              <div className='col-md-4'>
                <p>
                  <b>Mobile:</b> {employee.cell}{' '}
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <p>
                  <b>E-mail:</b> {employee.email}{' '}
                </p>
              </div>
              <div className='col-md-4'>
                <p>
                  <b>Country:</b> {employee.location.country}{' '}
                </p>
              </div>
              <div className='col-md-4'>
                <p>
                  <b>Nationality:</b> {employee.nat}{' '}
                </p>
              </div>
            </div>
          </div>
          <Button buttonText='Read more' rightAlign />
        </div>
      </div>
    </Link>
  );
};
