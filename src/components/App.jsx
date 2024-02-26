import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts} from '../redux/operations';
import { selectIsLoading, selectError } from '../redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Loading...</b>}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
