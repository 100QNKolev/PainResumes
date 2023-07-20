import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/authContext';
import { useMyInfoContext } from '../../../contexts/myInfoContext';

import { MyInformation } from '../../MyInformation/MyInformation';
import { DownloadButton } from '../templates/DownloadButton/DownloadButton';
import { ShareButton } from '../templates/ShareButton/ShareButton';
import { BasicResume } from '../templates/resumes/BasicResume/BasicResume';
import { InovativeResume } from '../templates/resumes/InovativeResume/InovativeResume';


export const Resume = () => {
    const { templateId } = useParams();
    const [resume, setResume] = useState();
    const { isAuthenticated } = useAuthContext();
    const { personalDetails, professionalExperience, education, skills } = useMyInfoContext();

    const showTemplate = () => {

        switch (templateId) {
            case '1':
                setResume(<BasicResume personalDetails={personalDetails} professionalExperience={professionalExperience} education={education} skills={skills} />);
                break;
            case '2':
                setResume(<InovativeResume personalDetails={personalDetails} professionalExperience={professionalExperience} education={education} skills={skills} />);
                break;
            default:
                setResume('');
        }
    };

    useEffect(() => {
        showTemplate();
        // eslint-disable-next-line
    }, [personalDetails, professionalExperience, education, skills]);

    return (
        <div>

            {isAuthenticated && <MyInformation />}

            <DownloadButton component={resume} fileName={'myResume.pdf'} />
            <ShareButton component={resume} />

            {resume}

        </div>
    );
};

export default Resume;
