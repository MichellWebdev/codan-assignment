import { Link, useLocation } from 'react-router-dom';

// Redux
import { RootState } from '../..';
import { useSelector } from 'react-redux';

// Component
import { DetailedContact } from '../../common/detailed-contact/detailed-contact';
import { Header } from '../../common/header/header';
import { Button } from '../../common/button/button';
import { EmployeeLabels } from '../../utils/labels/employee-labels';
import { DetailedLabels } from '../../utils/labels/detailed-labels';

interface Employee {
  // id: {
  //   value: string;
  // };
  array: [];
}

export const ContactInformation = () => {
  const location = useLocation();

  // Selected employee array
  const locationState = location.state as DetailedLabels;
  console.log('Details array', locationState);

  // Fetch employee array
  const employeeArray = useSelector((state: RootState) => state.employee);

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row page-margin'>
          <Link to='/' state={employeeArray}>
            <Button buttonText='Back to list' />
          </Link>
        </div>
      </div>
      <DetailedContact details={locationState} />
    </>
  );
};
