import { createContext, useState, useContext, useEffect } from 'react';

import { useAuthContext } from './authContext';

import { myInfoUtil } from '../providers/myInfoDataProvider';

export const MyInfoContext = createContext();

export const MyInfoProvider = ({ children }) => {

    const { userId, token } = useAuthContext();
    const { onGetInfo, onCreateInfo, onEditInfo, onDeleteInfo } = myInfoUtil(token);

    const [personalDetails, setPersonalDetails] = useState({});
    const [professionalExperience, setProfessionalExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        if (userId) {
            Promise.all([
                onGetPersonalDetails()
                , onGetProfessionalExperience()
                , onGetEducation()
                , onGetSkills()
            ])
                .then(([personalDetails, professionalExperience, education, skills]) => {
                    personalDetails ? setPersonalDetails(personalDetails) : setPersonalDetails({});
                    professionalExperience ? setProfessionalExperience(professionalExperience) : setProfessionalExperience([]);
                    education ? setEducation(education) : setEducation([]);
                    skills ? setSkills(skills) : setSkills([]);
                })
        }
        // eslint-disable-next-line
    }, [userId]);

    const clearValues = async () => {
        setPersonalDetails({});
        setProfessionalExperience([]);
        setEducation([]);
        setSkills([]);
    };

    const onPersonalDetailsSubmit = async (data) => {
        personalDetails._id ? await onEditPersonalDetails(data) : await onCreatePersonalDetails(data);
    };

    const onCreatePersonalDetails = async (data) => {
        await onCreateInfo(data, 'personalDetails', setPersonalDetails, userId);
    };

    const onCreateProfessionalExperience = async (data) => {
        await onCreateInfo(data, 'professionalExperience', setProfessionalExperience, userId);
    };

    const onCreateEducation = async (data) => {
        await onCreateInfo(data, 'education', setEducation, userId);
    };

    const onCreateSkills = async (data) => {
        await onCreateInfo(data, 'skills', setSkills, userId);
    };

    const onEditPersonalDetails = async (data) => {
        await onEditInfo(data, 'personalDetails', setPersonalDetails);
    };

    const onEditProfessionalExperience = async (data) => {
        await onEditInfo(data, 'professionalExperience', setProfessionalExperience);
    };

    const onEditEducation = async (data) => {
        await onEditInfo(data, 'education', setEducation);
    };

    const onEditSkills = async (data) => {
        await onEditInfo(data, 'skills', setSkills);
    };

    const onGetPersonalDetails = async () => {
        return await onGetInfo(userId, 'personalDetails');
    };

    const onGetProfessionalExperience = async () => {
        return await onGetInfo(userId, 'professionalExperience');
    };

    const onGetEducation = async () => {
        return await onGetInfo(userId, 'education');
    };

    const onGetSkills = async () => {
        return await onGetInfo(userId, 'skills');
    };

    const onDelProfessionalExperience = async (infoId) => {
        await onDeleteInfo(infoId, 'professionalExperience', setProfessionalExperience);
    };

    const onDelEducation = async (infoId) => {
        await onDeleteInfo(infoId, 'education', setEducation);
    };

    const onDelSkills = async (infoId) => {
        await onDeleteInfo(infoId, 'skills', setSkills);
    };

    const context = {
        personalDetails
        , professionalExperience
        , education
        , skills
        , onPersonalDetailsSubmit
        , onEditProfessionalExperience
        , onEditEducation
        , onEditSkills
        , onCreateProfessionalExperience
        , onCreateEducation
        , onCreateSkills
        , onDelProfessionalExperience
        , onDelEducation
        , onDelSkills
        , clearValues
    };

    return (
        <>
            <MyInfoContext.Provider value={context}>
                {children}
            </MyInfoContext.Provider>
        </>
    );
};

export const useMyInfoContext = () => {
    const context = useContext(MyInfoContext);

    return context;
};