import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/authContext';

import styles from './Login.module.css';

export const Login = () => {
  const { onLoginSubmit, guestBtnHandler} = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: '',
      password: '',
    },
    onLoginSubmit
  );

    return (
        <>
            <div className={styles['logo']}></div>
            <div className={styles['login-block']}>
                <form onSubmit={onSubmit} method='POST' >
                    <h1>Login</h1>
                    <input type='text' placeholder='Email' value={values.email} onChange={changeHandler} name='email' id='email' />
                    <input type='password' placeholder='Password' value={values.password} onChange={changeHandler} name='password' id='password' />
                    <button>Submit</button>
                    <button onClick={guestBtnHandler}>Log in as guest</button>
                </form>
                
            </div>
        </>
    );
};
