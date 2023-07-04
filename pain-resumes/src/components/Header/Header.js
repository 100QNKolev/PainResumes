//TODO: Implement AuthContext
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
    const isAuthenticated = false;
    const userId = 1;

    return (
        <nav>
            <ul className={styles['list-item']}>
                <li> <Link to='/templates'>Resume Templates</Link> </li>
                {!isAuthenticated && (
                    <>
                        <li id='guest'> <Link to='/login'>Login</Link> </li>
                        <li id='guest'> <Link to='/register'>Register</Link> </li>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <li id='user'> <Link to={`/account/${userId}`}>My account</Link> </li>
                        <li id='user'> <Link to='/logout'>Logout </Link> </li>
                    </>
                )}
            </ul>
        </nav>
    )
}