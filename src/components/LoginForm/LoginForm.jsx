import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        {
          email,
          password,
        }
      );
      // obsługa odpowiedzi z backendu (np. zapisz token JWT w localStorage, aby zachować sesję użytkownika)
      console.log(response.data); // można wykorzystać dane z odpowiedzi, np. token JWT
    } catch (error) {
      // obsługa błędu (np. wyświetl komunikat o nieudanym logowaniu)
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
      <button type="button" onClick={handleLogin}>
        Zaloguj się
      </button>
    </form>
  );
}

export default LoginForm;
