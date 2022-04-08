// Components
import { Header } from '../header/header';

// Labels
import { DetailedLabels } from '../../utils/labels/detailed-labels';

// Styles
import './detailed-contact.scss';

interface DetailedContactProps {
  // details: DetailedLabels;
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  phone: string;
  cell: string;
  email: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
  nat: string;
  dob: {
    date: string;
    age: number;
  };
  id?: {
    name: string;
    value: string;
  };
}

export const DetailedContact = ({
  picture: { large },
  name: { first, last },
  phone,
  cell,
  email,
  nat,
  location: { country, state, city },
  dob: { date, age },
}: DetailedContactProps) => {
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row page-margin details-card'>
          <div className='col'>
            <img src={large} alt='Profile picture' />
            <h3>
              {first} {last}
            </h3>
            <p>
              Birthday: {date} Age: {age}
            </p>
            <p>E-mail: {email}</p>
            <p>
              Cellphone: {cell} Phone: {phone}
            </p>
            <p>
              Location: {city}, {state}, {country}
            </p>
            <p>Nationality: {nat}</p>
          </div>
        </div>
      </div>
    </>
  );
};
