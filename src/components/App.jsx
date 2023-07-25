import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  saveContact,
  deleteContact,
  setFilter,
} from '../redux/contacts/contactsSlice';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ConctactList/ContactList';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
// import { isAuthenticated } from '../redux/authSlice';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Pobieranie kontaktu z backendu przy montowaniu komponentu
  //   dispatch(fetchContacts());

  //   // przekierowanie na stronę logowania, jeśli użytkownik nie jest zalogowany
  //   if (!isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [dispatch, isAuthenticated, navigate]);

  useEffect(() => {
    // Pobieranie kontaktu z backendu przy montowaniu komponentu
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContact = async (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in your contacts!`);
    } else {
      try {
        const response = await axios.post(
          'https://connections-api.herokuapp.com/contacts',
          { name, number }
        );
        dispatch(saveContact(response.data)); // zapisywanie kontaktu do backendu przy użyciu akcji saveContact
      } catch (error) {
        alert('Failed to save contact.');
      }
    }
  };

  const handleDeleteContact = async contactId => {
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactId}`
      );
      dispatch(deleteContact(contactId)); // usuwanie kontaktu z backendu przy użyciu akcji deleteContact
    } catch (error) {
      alert('Failed to delete contact.');
    }
  };

  const handleFilterChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value)); // aktualizowanie stanu filtra w Redux Store
  };

  // sprawdzenie czy contacts zostało załadowane
  if (!contacts) {
    return <div>Loading...</div>;
  }

  // przekierowanie na stronę logowania, jeśli użytkownik nie jest zalogowany
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  // filtrowanie kontaktów i zabezpieczenie przed użyciem toLowerCase, gdy filter jest undefined
  const filteredContacts = contacts.filter(contact => {
    return filter
      ? contact.name.toLowerCase().includes(filter.toLowerCase())
      : true;
  });

  return (
    <div className={styles.appContainer}>
      <Navigation />
      <Routes>
        <Route exact path="/">
          <div>
            <h2>Phonebook</h2>
            <p>All your contacts in one place</p>
            <ContactForm addContact={addContact} />
            <h2>Contacts</h2>
            <Filter filter={filter} handleFilterChange={handleFilterChange} />
            {contacts.length > 0 && <UserMenu />}{' '}
            {/* Wyświetl UserMenu tylko gdy użytkownik jest zalogowany */}
            <ContactList
              contacts={filteredContacts}
              deleteContact={handleDeleteContact}
            />
          </div>
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
};

export default App;

//   return (
//     <div className={styles.appContainer}>
//       <h1>Phonebook</h1>
//       <ContactForm addContact={addContact} />
//       <h2>Contacts</h2>
//       <Filter filter={filter} handleFilterChange={handleFilterChange} />
//       <ContactList
//         contacts={filteredContacts}
//         deleteContact={handleDeleteContact}
//       />
//     </div>
//   );
// };
