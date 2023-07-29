import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.nav} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.nav} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav>
//       {' '}
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;

// import styles from './Navigation.module.css'; //
//   <nav className={styles.navigationContainer}>
