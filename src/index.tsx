import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import { App } from './App';
// import { DetailedContact } from './common/detailed-contact/detailed-contact';
import { ContactInformation } from './components/contact-information/contact-information';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='details' element={<ContactInformation />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
