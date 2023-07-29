// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import styles from './UseMenu.module.css';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p>Welcome, {user.name}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

// const UserMenu = () => {
//   // stan do przechowywania informacji o zalogowanym użytkowniku
//   const [userEmail, setUserEmail] = useState('mango@mail.com');

//   // pobieranie dispatch z Redux, aby móc wywołać akcję wylogowania użytkownika
//   const dispatch = useDispatch();

//   // pobieranie navigate z react-router-dom, aby przekierować użytkownika po wylogowaniu
//   const navigate = useNavigate(); // zmiana użycia useHistory na useNavigate- błędy w konsoli

//   // funkcja obsługująca wylogowanie użytkownika
//   const handleLogout = () => {
//     // tu można wysłać żądanie HTTP do backendu, aby wylogować użytkownika
//     // zerowanie poczty użytkownika w stanie
//     setUserEmail('');

//     // wywowałanie akcji wylogowania
//     dispatch({ type: 'LOGOUT' });

//     // przekierowanie użytkownika na stronę logowania po wylogowaniu
//     navigate('/login'); // zmiana użycie history.push na navigate- błędy w  konsoli
//   };

//   // komponent UserMenu wyświetla pocztę użytkownika i przycisk wylogowania
//   return (
//     <div>
//       <p>{userEmail}</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default UserMenu;
