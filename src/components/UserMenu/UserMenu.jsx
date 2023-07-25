import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const UserMenu = () => {
  // Stan do przechowywania informacji o zalogowanym użytkowniku
  const [userEmail, setUserEmail] = useState('mango@mail.com');

  // Pobieramy dispatch z Redux, aby móc wywołać akcję wylogowania użytkownika
  const dispatch = useDispatch();

  // Pobieramy history z react-router-dom, aby przekierować użytkownika po wylogowaniu
  const history = useHistory();

  // Funkcja obsługująca wylogowanie użytkownika
  const handleLogout = () => {
    // Tutaj można wysłać żądanie HTTP do backendu, aby wylogować użytkownika
    // Na potrzeby przykładu, po prostu wyzerujemy pocztę użytkownika w stanie
    setUserEmail('');

    // Wywołujemy akcję wylogowania (np. jeśli korzystamy z Redux do zarządzania stanem zalogowania)
    dispatch({ type: 'LOGOUT' });

    // Przekierowujemy użytkownika na stronę logowania po wylogowaniu
    history.push('/login');
  };

  // Komponent UserMenu wyświetla pocztę użytkownika i przycisk wylogowania
  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
