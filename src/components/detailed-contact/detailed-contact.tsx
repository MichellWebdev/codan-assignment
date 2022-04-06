import React from 'react';

// Components
import { Header } from '../../common/header/header';

// Styles
import './detailed-contact.scss';

export const DetailedContact = () => {
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row page-margin details-card'>
          <div className='col'>
            <p>image</p>
            <p>name</p>
            <p>phone</p>
            <p>cell</p>
            <p>email</p>
            <p>country</p>
            <p>nationality</p>
            <p>city</p>
            <p>state</p>
          </div>
        </div>
      </div>
    </>
  );
};
