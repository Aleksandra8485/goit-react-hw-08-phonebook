import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Navigation.module.css'; // Opcjonalne, użyj tego, jeśli chcesz dodać stylowanie do nawigacji

const Navigation = () => {
  return (
    <nav>
      {' '}
      {/* Dodaj klasę do nawigacji, jeśli chcesz dodać stylowanie */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <p>Test Navigation</p> {/* tekst jako test */}
    </nav>
  );
};

export default Navigation;

//   <nav className={styles.navigationContainer}>
