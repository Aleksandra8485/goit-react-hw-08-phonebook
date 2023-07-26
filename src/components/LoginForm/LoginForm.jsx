import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        {
          email,
          password,
        }
      );
      // Zapisz token JWT w Local Storage
      localStorage.setItem('token', response.data.token);

      // Wykonaj jakieś akcje, np. przekierowanie na stronę po zalogowaniu
      navigate('/');
    } catch (error) {
      // Obsługa błędu (np. wyświetlenie komunikatu o nieudanym logowaniu)
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
