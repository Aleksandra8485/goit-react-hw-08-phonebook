import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import styles from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth(); //hook użyty, żeby użytkownik coś widział tylko wtedy kiedy jest zalogowany

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
