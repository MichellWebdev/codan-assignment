import { Link, useLocation } from 'react-router-dom';

// Redux
import { RootState } from '../..';
import { useSelector } from 'react-redux';

// Component
import { Header } from '../../common/header/header';
import { Button } from '../../common/button/button';
import { EmployeeDetails } from '../../common/employee-details/employee-details';

// Labels
import { DetailedLabels } from '../../utils/labels/detailed-labels';

export const SelectedEmployee = () => {
  const location = useLocation();

  // Selected employee array
  const locationState = location.state as DetailedLabels;

  // Fetch employee array
  const employeeArray = useSelector((state: RootState) => state.employee);

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row page-margin mb-3'>
          <Link to='/' state={employeeArray}>
            <Button buttonText='Back to list' />
          </Link>
        </div>
      </div>
      <EmployeeDetails details={locationState} />
    </>
  );
};
