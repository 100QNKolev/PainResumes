import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/authContext';

import styles from './Header.module.css';

export const Header = () => {
    const { isAuthenticated, userId } = useAuthContext();

    return (
       <nav>
           
                {!isAuthenticated && (
                    <>
                        <header>
                            <h2 className = {styles['logo']}></h2>
                            <nav className = {styles['navigation']}>
                                <a href = "/templates">Resume Templates</a>
                                <a href = "Login">Login</a>
                                <a href = "Register">Register</a>
                            </nav>
                        </header>
                    </>
                )}
                {isAuthenticated && (
                    <>
<<<<<<< Updated upstream
<<<<<<< HEAD
                        <li id='user'> <Link to={`/account/${userId}`}>My Information</Link> </li>
=======
                        <li id='user'> <Link to='/templates'>Resume Templates</Link> </li>
                        <li id='user'> <Link to={`/account/${userId}`}>My account</Link> </li>
>>>>>>> 33d0b685bcb983e7fa3964ec47aa9190ffc4e017
=======
                        <li id='user'> <Link to={`/account/${userId}`}>My Information</Link> </li>
>>>>>>> Stashed changes
                        <li id='user'> <Link to='/logout'>Logout </Link> </li>
                    </>
                )}
        </nav>
    );
};