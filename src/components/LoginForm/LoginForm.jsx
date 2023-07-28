import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         'https://connections-api.herokuapp.com/users/login',
//         {
//           email,
//           password,
//         }
//       );
//       // Zapisz token JWT w Local Storage
//       localStorage.setItem('token', response.data.token);

//       // Wykonaj jakieś akcje, np. przekierowanie na stronę po zalogowaniu
//       navigate('/');
//     } catch (error) {
//       // Obsługa błędu (np. wyświetlenie komunikatu o nieudanym logowaniu)
//       console.error(error);
//     }
//   };
//   return (
//     <form>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Hasło:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="button" onClick={handleLogin}>
//         Zaloguj się
//       </button>
//     </form>
//   );
// }

// export default LoginForm;
