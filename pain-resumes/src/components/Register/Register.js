import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/authContext';

import styles from './Register.module.css';

export const Register = () => {
  const { onRegisterSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm({
    username: ''
    , password: ''
    , repeatPassword: ''
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
          <input type='password' placeholder='Repeat Password' value={values.repeatPassword} onChange={changeHandler} name='repeatPassword' id='repeatPassword' />
          <input type='text' placeholder='Email' value={values.email} onChange={changeHandler} name='email' id='email' />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
