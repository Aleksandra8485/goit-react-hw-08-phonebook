import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading, selectFilter } from 'redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { setFilter } from '../redux/contacts/contactsSlice';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>

      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList />
    </>
  );
}
