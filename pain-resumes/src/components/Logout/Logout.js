import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/authContext';
import { useMyInfoContext } from '../../contexts/myInfoContext';

export const Logout = () => {
    const { onLogoutHandler } = useAuthContext();
    const { clearValues } = useMyInfoContext();


    useEffect(() => {
        onLogoutHandler();
        clearValues();
    }, [onLogoutHandler, clearValues]);

    return <Navigate to='/templates' />
};