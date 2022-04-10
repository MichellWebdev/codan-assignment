// Labels
import { DetailedLabels } from '../../utils/labels/detailed-labels';

// Styles
import './employee-details.scss';

interface EmployeeDetailsProps {
  details: DetailedLabels;
}

export const EmployeeDetails = ({ details }: EmployeeDetailsProps) => {
  const formattedDate = new Date(details.dob.date).toLocaleDateString('dk-DK');

  return (
    <div className='container-fluid details'>
      <div className='row page-margin details-card'>
        <div className='col'>
          <img src={details.picture.large} alt='Profile picture' />
          <h3 className='mt-1'>
            {details.name.first} {details.name.last}
          </h3>
          <p>
            <b>Birthday:</b> {formattedDate} <b>Age:</b> {details.dob.age}
          </p>
          <p>
            <b>E-mail:</b> {details.email}
          </p>
          <p>
            <b>Mobile:</b> {details.cell} <b>Phone:</b> {details.phone}
          </p>
          <p>
            <b>Location:</b> {details.location.city}, {details.location.state}, {details.location.country}
          </p>
          <p>
            <b>Nationality:</b> {details.nat}
          </p>
        </div>
      </div>
    </div>
  );
};
