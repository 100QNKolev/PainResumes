import { useState } from 'react';

import { PersonalDetails } from './Sections/PersonalDetails/PersonalDetails';
import { ProfessionalExperience } from './Sections/ProfessionalExperience/ProfessionalExperience';
import { Education } from './Sections/Education/Education';
import { Skills } from './Sections/Skills/Skills';
import { ShowSectionBtn } from './Sections/templates/ShowSectionButton/ShowSectionButton';

import styles from './MyInformation.module.css';

export const MyInformation = () => {

    const [section, setSection] = useState('none');

    const onClickShowSectionBtnHandler = (e) => {
        e.preventDefault();

        switch (e.target.name) {
            case 'personalDetails':
                setSection('personalDetails');
                break;
            case 'professionalExperience':
                setSection('professionalExperience');
                break;
            case 'education':
                setSection('education');
                break;
            case 'skills':
                setSection('skills');
                break;
            default:
                setSection('');
        }
    };

    return (
        <>
            <div className={styles['logo']}></div>
            <div className={styles['container']}>

                <ShowSectionBtn name='personalDetails' onClick={onClickShowSectionBtnHandler} text='Personal Details' />
                <ShowSectionBtn name='professionalExperience' onClick={onClickShowSectionBtnHandler} text='Professional Experience' />
                <ShowSectionBtn name='education' onClick={onClickShowSectionBtnHandler} text='Education' />
                <ShowSectionBtn name='skills' onClick={onClickShowSectionBtnHandler} text='Skills' />
                <ShowSectionBtn name='none' onClick={onClickShowSectionBtnHandler} text='X' />

                {section === 'personalDetails' && (
                    <div>
                        <PersonalDetails />
                    </div>
                )}

                {section === 'professionalExperience' && (
                    <div>
                        <ProfessionalExperience />
                    </div>
                )}

                {section === 'education' && (
                    <div>
                        <Education />
                    </div>
                )}

                {section === 'skills' && (
                    <div>
                        <Skills />
                    </div>
                )}
                
            </div>
        </>
    );

};