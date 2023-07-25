import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  // Stan do przechowywania informacji o zalogowanym użytkowniku
  const [userEmail, setUserEmail] = useState('mango@mail.com');

  // Pobieramy dispatch z Redux, aby móc wywołać akcję wylogowania użytkownika
  const dispatch = useDispatch();

  // Pobieramy navigate z react-router-dom, aby przekierować użytkownika po wylogowaniu
  const navigate = useNavigate(); // Zmieniamy użycie useHistory na useNavigate

  // Funkcja obsługująca wylogowanie użytkownika
  const handleLogout = () => {
    // Tutaj można wysłać żądanie HTTP do backendu, aby wylogować użytkownika
    // Na potrzeby przykładu, po prostu wyzerujemy pocztę użytkownika w stanie
    setUserEmail('');

    // Wywołujemy akcję wylogowania (np. jeśli korzystamy z Redux do zarządzania stanem zalogowania)
    dispatch({ type: 'LOGOUT' });

    // Przekierowujemy użytkownika na stronę logowania po wylogowaniu
    navigate('/login'); // Zmieniamy użycie history.push na navigate
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
