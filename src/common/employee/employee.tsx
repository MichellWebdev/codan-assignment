import React from 'react';

import './employee.scss';

interface EmployeeProps {
  image: string;
  firstName: string;
  lastName: string;
  phone: string;
  cell: string;
  email: string;
  country: string;
  nationality: string;
}

export const Employee = ({ image, firstName, lastName, phone, cell, email, country, nationality }: EmployeeProps) => {
  return (
    <div className='container-fluid'>
      <div className='page-margin row employee-card align-items-center'>
        <div className='col-2'>
          <img src={image} alt='profile image' />
        </div>
        <div className='col-10'>
          <div className='row'>
            <div className='col-md-4'>
              <p>
                Name: {firstName} {lastName}
              </p>
            </div>
            <div className='col-md-4'>
              <p>Phone: {phone} </p>
            </div>
            <div className='col-md-4'>
              <p>Mobile: {cell} </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <p>E-mail: {email} </p>
            </div>
            <div className='col-md-4'>
              <p>Country: {country} </p>
            </div>
            <div className='col-md-4'>
              <p>Nationality: {nationality} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
