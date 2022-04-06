import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import { App } from './App';
import { DetailedContact } from './components/detailed-contact/detailed-contact';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='details' element={<DetailedContact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// import ReactDOM from 'react-dom';

// import { App } from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
