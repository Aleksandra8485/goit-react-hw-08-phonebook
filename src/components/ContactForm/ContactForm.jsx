import React, { useState } from 'react';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { saveContact } from '../../redux/contacts/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    // Wprowadzenie walidacji dla imienia
    const namePattern = /^[A-Za-z.'\- ]+$/;
    if (!namePattern.test(name)) {
      alert(
        'Invalid name. Please use only letters, spaces, apostrophes, hyphens, and dots.'
      );
      return;
    }

    // Wprowadzenie walidacji dla numeru telefonu
    const numberPattern =
      /^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$/;
    if (!numberPattern.test(number)) {
      alert('Invalid phone number. Please use a valid phone number format.');
      return;
    }
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        { name, number }
      );

      // Wykonaj jakieś akcje po dodaniu kontaktu, np. wyświetlenie potwierdzenia
      console.log('Contact added:', response.data);
    } catch (error) {
      // Obsługa błędu, np. wyświetlenie komunikatu o nieudanym dodaniu kontaktu
      console.error(error);
    }

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setNumber(e.target.value)}
        className={styles.input}
      />
      <button className={styles.addContactBtn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
