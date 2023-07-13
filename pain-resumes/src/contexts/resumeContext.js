import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './authContext';

import { resumeServiceFactory } from '../services/ResumeService';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {

    const { token, userId } = useContext(AuthContext);

    const [resumes, setResumes] = useState([]);
    const navigate = useNavigate();
    const { getOne, create, deleteResume, edit, getByUser } = resumeServiceFactory(token);

    useEffect(() => {
        getByUser(userId)
            .then(result => {
                setResumes(result);
            })
        // eslint-disable-next-line
    }, []);

    const onCreateSubmit = async (data) => {
        const newResume = await create(data);

        setResumes(x => [...x, newResume]);

        navigate('/templates');
    };

    const onEditSubmit = async (data) => {
        const result = await edit(data._id, data);

        setResumes(state => state.map(x => x._id === data._id ? result : x));

        navigate(`/resumes/${data._id}`);
    };
    const deleteResumeHandler = async (resumeId) => {

        await deleteResume(resumeId);

        setResumes(state => state.filter(x => x._id !== resumeId));

        navigate('/catalog');
    };

    const getOneResume = async (resumeId) => {
        return await getOne(resumeId);
    };

    const context = {
        resumes
        , onCreateSubmit
        , onEditSubmit
        , deleteResumeHandler
        , getOneResume
    };

    return (
        <>
            <ResumeContext.Provider value={context}>
                {children}
            </ResumeContext.Provider>
        </>
    );
};

export const useResumeContext = () => {
    const context = useContext(ResumeContext);

    return context;
};