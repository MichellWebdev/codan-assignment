import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Redux
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { employeeReducer } from './services/reducers/employeeReducer';
import ReduxThunk from 'redux-thunk';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Components
import { App } from './App';
import { ContactInformation } from './components/contact-information/contact-information';
import { Provider } from 'react-redux';

// Reducers
const rootReducer = combineReducers({ employee: employeeReducer });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='details' element={<ContactInformation />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
