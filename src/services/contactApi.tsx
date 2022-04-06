import React from 'react';

export const baseUrl = 'https://randomuser.me/api/';
// export const contactInformation = `${baseUrl}?inc=name,email,phone,cell,nat,location,picture`;
export const contactInformation = `${baseUrl}?results=25&inc=name,email,phone,cell,nat,location,picture`;

// longer info for details page could be called "getDetailedContactInfo" or something like that
export const getContactInfo = async () => {
  const connection = await fetch(contactInformation);

  if (connection.status !== 200) {
    console.log('error');
    return;
  }

  const jResponse = await connection.json();
  console.log('jResponse', jResponse);

  return jResponse.results;
};
