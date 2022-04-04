import React from 'react';

import './employee.scss';

interface EmployeeProps {
  image: string;
  name: string;
  phone: string;
  cell: string;
  email: string;
  country: string;
  nationality: string;
}

export const Employee = ({ image, name, phone, cell, email, country, nationality }: EmployeeProps) => {
  return (
    <div className='container-fluid'>
      <div className='page-margin row employee-card'>
        <div className='col-2'>
          <p>Profile image</p>
        </div>
        <div className='col-10'>
          <div className='row'>
            <div className='col-3'>
              <p>Name: {name}</p>
            </div>
            <div className='col-3'>
              <p>Phone: {phone} </p>
            </div>
            <div className='col-3'>
              <p>Mobile: {cell} </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <p>E-mail: {email} </p>
            </div>
            <div className='col-3'>
              <p>Country: {country} </p>
            </div>
            <div className='col-3'>
              <p>Nationality: {nationality} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
