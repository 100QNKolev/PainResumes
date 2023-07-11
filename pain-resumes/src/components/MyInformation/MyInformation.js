import { useState } from 'react';

import { PersonalDetails } from './Sections/PersonalDetails/PersonalDetails';
import { ProfessionalExperience } from './Sections/ProfessionalExperience/ProfessionalExperience';
import { Education } from './Sections/Education/Education';
import { Skills } from './Sections/Skills/Skills';

import styles from './MyInformation.module.css';

export const MyInformation = () => {

    const [section, setSection] = useState('personalDetails');

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

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

                <button name='personalDetails' className={styles['showSectionBtn']} onClick={onClickShowSectionBtnHandler}>Personal Details</button>
                <button name='professionalExperience' className={styles['showSectionBtn']} onClick={onClickShowSectionBtnHandler}>Professional Experience</button>
                <button name='education' className={styles['showSectionBtn']} onClick={onClickShowSectionBtnHandler}>Education</button>
                <button name='skills' className={styles['showSectionBtn']} onClick={onClickShowSectionBtnHandler}>Skills</button>

                {
                    section === 'personalDetails' && (
                        <div>
                            <PersonalDetails/>
                        </div>
                    )
                }
                {
                    section === 'professionalExperience' && (
                        <div>
                            <ProfessionalExperience onSubmitHandler={onSubmitHandler} />
                        </div>
                    )
                }
                {
                    section === 'education' && (
                        <div>
                            <Education onSubmitHandler={onSubmitHandler} />
                        </div>
                    )
                }
                {
                    section === 'skills' && (
                        <div>
                            <Skills onSubmitHandler={onSubmitHandler} />
                        </div>
                    )
                }
                
            </div>
        </>
    );

};