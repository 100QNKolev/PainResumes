import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useMyInfoContext } from '../../../contexts/myInfoContext';

import { MyInformation } from '../../MyInformation/MyInformation';
import { DownloadButton } from '../templates/donwloadButton/DownloadButton';
import { BasicResume } from '../templates/resumes/BasicResume/BasicResume';

export const Resume = () => {
    const { personalDetails, professionalExperience, education, skills } = useMyInfoContext();
    const { templateId } = useParams();
    const [resume, setResume] = useState(<> </>);

    const showTemplate = () => {

        switch (templateId) {
            case '1':
                setResume(<BasicResume id={templateId} personalDetails={personalDetails} professionalExperience={professionalExperience} education={education} skills={skills} />);
                break;
            default:
                setResume('');
        }
    };

    useEffect(() => {
        showTemplate();
        // eslint-disable-next-line
    }, []);

    return (
        <div>

            <MyInformation />

            <DownloadButton component={resume} fileName={'myResume.pdf'} />

            {resume}


        </div>
    );
};

export default Resume;
