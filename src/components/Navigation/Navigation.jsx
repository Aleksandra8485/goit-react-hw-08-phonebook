import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      {' '}
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

// import styles from './Navigation.module.css'; //
//   <nav className={styles.navigationContainer}>
