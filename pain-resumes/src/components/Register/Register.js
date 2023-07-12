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

<<<<<<< Updated upstream
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
=======
    const { values, changeHandler, onSubmit } = useForm({
        username: ''
        , password: ''
        , confirmPassword: ''
        , email: ''
    }, onRegisterSubmit);

    return (
        <>
            <div className={styles['logo']}></div>
            <div className={styles['register-block']}>
                <h1>Register</h1>
                <form onSubmit={onSubmit} method='POST'>
                    <input type='text' placeholder='Username' value={values.username} onChange={changeHandler} name='username' id='username' />
                    <input type='password' placeholder='Password' value={values.password} onChange={changeHandler} name='password' id='password' />
                    <input type='password' placeholder='Confirm Password' value={values.confirmPassword} onChange={changeHandler} name='confirmPassword' id='confirmPassword' />
                    <input type='text' placeholder='Email' value={values.email} onChange={changeHandler} name='email' id='email' />
                    <button>Submit</button>
                </form>
            </div>
        </>
    );
};
>>>>>>> Stashed changes
