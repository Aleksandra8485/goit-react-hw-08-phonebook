import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        {
          email,
          password,
        }
      );
      // obsługa odpowiedzi z backendu (np. wyświetl komunikat o powodzeniu rejestracji)
      console.log(response.data); // można wykorzystać dane z odpowiedzi, np. potwierdzenie rejestracji
    } catch (error) {
      // obsługa błędu (np. wyświetl komunikat o nieudanej rejestracji)
      console.error(error);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Hasło:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleRegister}>
        Zarejestruj się
      </button>
    </form>
  );
}

export default RegisterForm;
