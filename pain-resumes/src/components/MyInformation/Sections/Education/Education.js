import { useEffect, useState } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
import { useForm } from '../../../../hooks/useForm';

import { InfoItem } from '../templates/InfoItem/InfoItem';

import styles from './Education.module.css';

export const Education = () => {
    const { onCreateEducation, onGetEducation, onEditEducation, onDelEducation } = useMyInfoContext();
    const [educations, setEducations] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const { values, changeHandler, onSubmit, changeValues, resetValues } = useForm({
        schoolName: ''
        , schoolLocation: ''
        , startDate: ''
        , endDate: ''
        , degree: ''
        , fieldOfStudy: ''
        , description: ''
    }, onCreateEducation);

    useEffect(() => {
        onGetEducation()
            .then(result => {
                if (result) setEducations(result);
            });
    }, [onGetEducation]);

    const setAllEducations = async () => {
        onGetEducation()
            .then(result => {
                if (result) setEducations(result);
            });
    };

    const onSubmitEducation = async (e) => {
        e.preventDefault();

        const buttonValue = e.target.querySelector('button').value;

        if (buttonValue === 'Add') {
            await onSubmit(e);
        }
        else {
            await onEditEducation(values);

            setIsEditable(false);
            resetValues();
        }

        await setAllEducations();
    };

    const onDeleteEducation = async (id) => {
        await onDelEducation(id);

        await setAllEducations();
    };

    const onEditEducationBtnClick = async (id) => {
        await setIsEditable(true);

        await changeValues(educations.find(x => x._id == id));
    };


    return (
        <form onSubmit={onSubmitEducation} method='POST'>
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

                {isEditable ?
                    <button className={styles['addBtn']} value='Edit' >Edit</button>
                    : <button className={styles['addBtn']} value='Add' >Add</button>
                }

                {educations.length > 0 && (

                    educations.map(x => (
                        <div key={x._id}>
                            <InfoItem text={x.degree + ': ' + x.fieldOfStudy} id={x._id} onDeleteHandler={onDeleteEducation} onEditHandler={onEditEducationBtnClick} />
                        </div>
                    ))

                )}
            </div>

        </form>
    );
};