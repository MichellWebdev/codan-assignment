// Components
import { Header } from './common/header/header';
import { SearchEmployee } from './components/search-employee/search-employee';

// Styles
import './utils/shared-styles.scss';

export const App = () => {
  return (
    <>
      <Header />
      <SearchEmployee />
    </>
  );
};
