import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Redux
import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { employeeReducer } from './services/reducers/employeeReducer';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Components
import { App } from './App';
import { SelectedEmployee } from './components/selected-employee/selected-employee';
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
        <Route path='/' element={<App />} />
        <Route path='details' element={<SelectedEmployee />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
