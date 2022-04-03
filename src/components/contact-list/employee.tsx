import React from 'react';

export const Employee = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-auto'>
          <p>Profile image</p>
        </div>
        <div className='col-auto'>
          <div className='row'>
            <div className='col'>
              <p>Name</p>
            </div>
            <div className='col'>
              <p>Phone</p>
            </div>
            <div className='col'>
              <p>Mobile</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p>Other info</p>
            </div>
            <div className='col'>
              <p>Other info</p>
            </div>
            <div className='col'>
              <p>Other info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
