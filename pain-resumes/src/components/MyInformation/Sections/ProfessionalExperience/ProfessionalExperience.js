<<<<<<< Updated upstream
=======
import { useEffect } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
>>>>>>> Stashed changes
import { useForm } from '../../../../hooks/useForm';

import styles from './ProfessionalExperience.module.css';

<<<<<<< Updated upstream
export const ProfessionalExperience = ({ onSubmitHandler }) => {

    const { values, changeHandler, onSubmit } = useForm({
=======
export const ProfessionalExperience = () => {
    const { onProfessionalExperienceSubmit, onGetProfessionalExperience } = useMyInfoContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
>>>>>>> Stashed changes
        positionTitle: ''
        , companyName: ''
        , startDate: ''
        , endDate: ''
        , workSummary: ''
<<<<<<< Updated upstream
    }, onSubmitHandler);
=======
    }, onProfessionalExperienceSubmit);

    useEffect(() => {
        onGetProfessionalExperience()
            .then(result => {
                if (result) changeValues(result);
            })
        // eslint-disable-next-line
    }, [onProfessionalExperienceSubmit]);
>>>>>>> Stashed changes

    return (
        <form onSubmit={onSubmit} method='POST'>
            <h1>Professional Experience</h1>
            <div className={styles['nestedContainer']}>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                <div className={styles['inputDiv']}>
                    <label>Position Title:</label>
                    <input type='text' placeholder='Position Title' value={values.positionTitle} onChange={changeHandler} name='positionTitle' id='positionTitle' className={styles['currentInput']} />
                </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                <div className={styles['inputDiv']}>
                    <label>Company Name:</label>
                    <input type='text' placeholder='Company Name' value={values.companyName} onChange={changeHandler} name='companyName' id='companyName' className={styles['currentInput']} />
                </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                <div className={styles['inputDiv']}>
                    <label>Start Date:</label>
                    <input type='text' placeholder='Start Date' value={values.startDate} onChange={changeHandler} name='startDate' id='startDate' className={styles['currentInput']} />
                </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                <div className={styles['inputDiv']}>
                    <label>End Date:</label>
                    <input type='text' placeholder='End Date' value={values.endDate} onChange={changeHandler} name='endDate' id='endDate' className={styles['currentInput']} />
                </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                <div className={styles['inputDiv']}>
                    <h2>Work Summary:</h2>
                    <textarea placeholder='Work Summary' value={values.workSummary} onChange={changeHandler} name='workSummary' id='workSummary' />
                </div>
<<<<<<< Updated upstream
                <button className={styles['saveBtn']}>Save</button>
                <button className={styles['addBtn']}>Add More Experience</button>
            </div>
=======

                <button className={styles['addBtn']}>Add</button>
            </div>

>>>>>>> Stashed changes
        </form>
    );
};