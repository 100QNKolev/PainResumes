import { createContext, useState, useContext, useEffect } from 'react';

//import { useNavigate } from 'react-router-dom';

import { useAuthContext } from './authContext';
import { myInfoServiceFactory } from '../services/myInfoService';

export const MyInfoContext = createContext();

export const MyInfoProvider = ({ children }) => {

    const { userId, token } = useAuthContext();

    const [personalDetails, setPersonalDetails] = useState({});
    const [professionalExperience, setProfessionalExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);

    const personalDetailsRequester = myInfoServiceFactory(token, 'personalDetails');
    const professionalExperienceRequester = myInfoServiceFactory(token, 'professionalExperience');
    const educationRequester = myInfoServiceFactory(token, 'education');
    const skillsRequester = myInfoServiceFactory(token, 'skills');

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

    const onPersonalDetailsSubmit = async (data) => {
        personalDetails._id ? await onEditPersonalDetails(data) : await onCreatePersonalDetails(data);
    };

    const onCreatePersonalDetails = async (data) => {
        const newPersonalDetails = await personalDetailsRequester.postInfo(data);

        await setPersonalDetails(newPersonalDetails);
    };

    const onCreateProfessionalExperience = async (data) => {
        const newProfessionalExperience = await professionalExperienceRequester.postInfo(data);

        await setProfessionalExperience(newProfessionalExperience);
    };

    const onCreateEducation = async (data) => {
       await educationRequester.postInfo(data);
    };

    const onCreateSkills = async (data) => {
        await skillsRequester.postInfo(data);
    };

    const onEditPersonalDetails = async (data) => {
        const infoId = data._id;
        const newPersonalDetails = await personalDetailsRequester.putInfo(infoId, data);

        await setPersonalDetails(newPersonalDetails);
    };

    const onEditProfessionalExperience = async (data) => {
        const infoId = data._id;
        await professionalExperienceRequester.putInfo(infoId, data);

        await setProfessionalExperience(onGetProfessionalExperience);
    };

    const onEditEducation = async (data) => {
        const infoId = data._id;
        await educationRequester.putInfo(infoId, data);

        await setEducation(onGetEducation);
    };

    const onEditSkills = async (data) => {
        const infoId = data._id;
        await skillsRequester.putInfo(infoId, data);

        await setSkills(onGetSkills);
    };

    const onGetPersonalDetails = async () => {
        const result = await personalDetailsRequester.getInfo(userId);

        const details = result[0];

        return details;
    };

    const onGetProfessionalExperience = async () => {
        const result = await professionalExperienceRequester.getInfo(userId);

        return result;
    };

    const onGetEducation = async () => {
        const result = await educationRequester.getInfo(userId);

        return result;
    };

    const onGetSkills = async () => {
        const result = await skillsRequester.getInfo(userId);

        return result;
    };

    const onDelProfessionalExperience = async (infoId) => {
        await professionalExperienceRequester.deleteInfo(infoId);
    };

    const onDelEducation = async (infoId) => {
        await educationRequester.deleteInfo(infoId);
    };

    const onDelSkills = async (infoId) => {
        await skillsRequester.deleteInfo(infoId);
    };

    const context = {
        personalDetails
        , onGetEducation
        , onGetPersonalDetails
        , onGetProfessionalExperience
        , onGetSkills
        , onPersonalDetailsSubmit
        , onEditEducation
        , onCreateEducation
        , onCreateSkills
        , onEditSkills
        , onEditProfessionalExperience
        , onCreateProfessionalExperience
        , onDelProfessionalExperience
        , onDelSkills
        , onDelEducation
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