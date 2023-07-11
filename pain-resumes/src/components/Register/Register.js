import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/authContext';

import styles from './Register.module.css';

export const Register = () => {
  const { onRegisterSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onRegisterSubmit
  );

  return (
    <div className={styles.wrapper}>
      <span className={styles['icon-close']}>
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <div className={`${styles['form-box']} ${styles.register}`}>
        <h2>Register</h2>
        <form action="#">
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
          <div className={styles['input-box']}>
            <span className={styles.icon}>
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={changeHandler}
              required
            />
            <label>Confirm Password</label>
          </div>
          <button type="submit" className={styles.btn}>
            Register
          </button>
          <div className={styles['login-register']}>
            <p>
              Already have an account?
              <a href="Login" className={styles['login-link']}>
              &nbsp;Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
