import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/authContext';

import styles from './Login.module.css';

export const Login = () => {
  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: '',
      password: '',
    },
    onLoginSubmit
  );

  return (
    <div className={styles.wrapper}>
      <span className={styles['icon-close']}>
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <div className={`${styles['form-box']} ${styles.login}`}>
        <h2>Login</h2>
        <form onSubmit={onSubmit} method='POST'>
          <div className={styles['input-box']}>
            <span className={styles.icon}>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              required
            />
            <label>Email</label>
          </div>
          <div className={styles['input-box']}>
            <span className={styles.icon}>
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
              required
            />
            <label>Password</label>
          </div>
          <div className={styles['remember-forgot']}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className={styles.btn}>
            Login
          </button>
          <div className={styles['login-register']}>
            <p>
              Don't have an account?
              <a href="Register" className={styles['register-link']}>
              &nbsp;Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

