// Components
import { Header } from './common/header/header';
import { SearchContacts } from './components/search-contacts/search-contacts';

// Styles
import './utils/shared-styles.scss';

export const App = () => {
  return (
    <>
      <Header />
      <SearchContacts />
    </>
  );
};
