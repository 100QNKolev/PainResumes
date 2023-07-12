<<<<<<< Updated upstream
=======
import { useEffect } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
>>>>>>> Stashed changes
import { useForm } from '../../../../hooks/useForm';

import styles from './Education.module.css';

<<<<<<< Updated upstream
export const Education = ({ onSubmitHandler }) => {
    const { values, changeHandler, onSubmit } = useForm({
=======
export const Education = () => {
    const { onEducationSubmit, onGetEducation } = useMyInfoContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
>>>>>>> Stashed changes
        schoolName: ''
        , schoolLocation: ''
        , startDate: ''
        , endDate: ''
        , degree: ''
        , fieldOfStudy: ''
        , description: ''
<<<<<<< Updated upstream
    }, onSubmitHandler);
=======
    }, onEducationSubmit);

    useEffect(() => {
        onGetEducation()
            .then(result => {
                if (result) changeValues(result);
            })
        // eslint-disable-next-line
    }, [onEducationSubmit]);
>>>>>>> Stashed changes

    return (
        <form onSubmit={onSubmit} method='POST'>
            <h1>Education</h1>
            <div className={styles['nestedContainer']}>
                <div className={styles['inputDiv']}>
                    <label>School Name:</label>
                    <input type='text' placeholder='School Name' value={values.schoolName} onChange={changeHandler} name='schoolName' id='schoolName' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>School Adress:</label>
                    <input type='text' placeholder='Last Name' value={values.schoolLocation} onChange={changeHandler} name='schoolLocation' id='schoolLocation' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Start Date:</label>
                    <input type='text' placeholder='Start Date' value={values.startDate} onChange={changeHandler} name='startDate' id='startDate' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>End Date:</label>
                    <input type='text' placeholder='End Date' value={values.endDate} onChange={changeHandler} name='endDate' id='endDate' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Degree:</label>
                    <input type='text' placeholder='Degree' value={values.degree} onChange={changeHandler} name='degree' id='degree' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Field Of Study:</label>
                    <input type='text' placeholder='Field Of Study' value={values.fieldOfStudy} onChange={changeHandler} name='fieldOfStudy' id='fieldOfStudy' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <h2>Description:</h2>
                    <textarea placeholder='e.g. Coursework toward: Degree Title, School Name, ST or online...' value={values.description} onChange={changeHandler} name='description' id='description' />
                </div>
<<<<<<< Updated upstream
                <button className={styles['saveBtn']}>Save</button>
                <button className={styles['addBtn']}>Add More Education</button>
            </div>
=======

                <button className={styles['addBtn']}>Add</button>
            </div>

>>>>>>> Stashed changes
        </form>
    );
};