import { createContext, useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const authService = authServiceFactory(user.accessToken);
    const navigate = useNavigate();

    const onLoginSubmit = async (userData) => {
        const result = await authService.Login(userData);

        const user = result[0];
        const token = result[1];
        user.accessToken = token;

        setUser(user);

        navigate('/templates');
    };

    const onRegisterSubmit = async (userData) => {
        const result = await authService.Register(userData);

        const user = result[0];
        const token = result[1];
        user.accessToken = token;

        setUser(user);

        navigate('/templates');
    };

    const onLogoutHandler = async () => {
        await authService.Logout();

        setUser({});

        navigate('/templates');
    };

    const context = {
        onLoginSubmit
        , onRegisterSubmit
        , onLogoutHandler
        , userId: user._id
        , username: user.username
        , email: user.email
        , token: user.accessToken
        , isAuthenticated: !!user.accessToken
    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};