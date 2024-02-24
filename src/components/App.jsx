import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactSlice';

function App() {

  const dispatch = useDispatch();
  const { loading, error } =  useSelector(state => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </>
  );
}

export default App;
