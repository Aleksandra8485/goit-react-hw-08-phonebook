import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  saveContact,
  deleteContact,
  setFilter,
} from '../redux/contacts/contactsSlice';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ConctactList/ContactList';
import Navigation from './Navigation/Navigation';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(fetchContacts()); // pobieranie kontaktu z backendu przy montowaniu komponentu
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
          'https://64b581fcf3dbab5a95c766eb.mockapi.io/contacts',
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
        `https://64b581fcf3dbab5a95c766eb.mockapi.io/contacts/${contactId}`
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

  // filtrowanie kontaktów i zabezpieczenie przed użyciem toLowerCase, gdy filter jest undefined
  const filteredContacts = contacts.filter(contact => {
    return filter
      ? contact.name.toLowerCase().includes(filter.toLowerCase())
      : true;
  });

  return (
    <div className={styles.appContainer}>
      <Router>
        <Navigation />
        <Route exact path="/">
          <div>
            <h2>Home</h2>
            {/* Dodaj zawartość strony Home, np. */}
            <ContactForm addContact={addContact} />
            <h2>Contacts</h2>
            <Filter filter={filter} handleFilterChange={handleFilterChange} />
            <ContactList
              contacts={filteredContacts}
              deleteContact={handleDeleteContact}
            />
          </div>
        </Route>
        <Route path="/login">
          <div>
            <h2>Login</h2>
            {/* Dodaj zawartość strony Login, np. */}
            <p>Tu będzie formularz logowania</p>
          </div>
        </Route>
        <Route path="/register">
          <div>
            <h2>Register</h2>
            {/* Dodaj zawartość strony Register, np. */}
            <p>Tu będzie formularz rejestracji</p>
          </div>
        </Route>
        {/* Dodaj inne trasy do innych komponentów */}
      </Router>
    </div>
  );
};

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

export default App;
