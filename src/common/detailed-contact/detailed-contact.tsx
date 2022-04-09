// Components
import { Header } from '../header/header';

// Labels
import { DetailedLabels } from '../../utils/labels/detailed-labels';

// Styles
import './detailed-contact.scss';

interface DetailedContactProps {
  details: DetailedLabels;
}

export const DetailedContact = ({ details }: DetailedContactProps) => {
  const formattedDate = new Date(details.dob.date).toLocaleDateString('dk-DK');

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row page-margin details-card'>
          <div className='col'>
            <img src={details.picture.large} alt='Profile picture' />
            <h3>
              {details.name.first} {details.name.last}
            </h3>
            <p>
              Birthday: {formattedDate} Age: {details.dob.age}
            </p>
            <p>E-mail: {details.email}</p>
            <p>
              Cellphone: {details.cell} Phone: {details.phone}
            </p>
            <p>
              Location: {details.location.city}, {details.location.state}, {details.location.country}
            </p>
            <p>Nationality: {details.nat}</p>
          </div>
        </div>
      </div>
    </>
  );
};
