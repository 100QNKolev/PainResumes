import { useState } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
import { useForm } from '../../../../hooks/useForm';

import { InfoItem } from '../templates/InfoItem/InfoItem';
import { InputDiv } from '../templates/InputDiv/InputDiv';

import styles from './Education.module.css';

export const Education = () => {
    const { education, onCreateEducation, onEditEducation, onDelEducation } = useMyInfoContext();
    const [isEditable, setIsEditable] = useState(false);
    const { values, changeHandler, onSubmit, changeValues, resetValues } = useForm({
        _id: ''
        , schoolName: ''
        , schoolLocation: ''
        , startDate: ''
        , endDate: ''
        , degree: ''
        , fieldOfStudy: ''
        , description: ''
    }, onCreateEducation);

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
        };
    };

    const onDeleteEducation = async (id) => {
        await onDelEducation(id);

        await setIsEditable(false);
    };

    const onEditEducationBtnClick = async (id) => {
        await setIsEditable(true);

        await changeValues(education.find(x => x._id === id));
    };

    return (
        <form onSubmit={onSubmitEducation} method='POST'>
            <h1>Education</h1>
            <div className={styles['nestedContainer']}>

                <InputDiv label='School Name:' placeholder='School Name' value={values.schoolName} onChange={changeHandler} name='schoolName' id='schoolName' />

                <InputDiv label='School Adress:' placeholder='Last Name' value={values.schoolLocation} onChange={changeHandler} name='schoolLocation' id='schoolLocation' />

                <InputDiv label='Start Date:' placeholder='Start Date' value={values.startDate} onChange={changeHandler} name='startDate' id='startDate' />

                <InputDiv label='End Date:' placeholder='End Date' value={values.endDate} onChange={changeHandler} name='endDate' id='endDate' />

                <InputDiv label='Degree:' placeholder='Degree' value={values.degree} onChange={changeHandler} name='degree' id='degree' />

                <InputDiv label='Field Of Study:' placeholder='Field Of Study' value={values.fieldOfStudy} onChange={changeHandler} name='fieldOfStudy' id='fieldOfStudy' />

                <div className={styles['inputDiv']}>
                    <h2>Description:</h2>
                    <textarea placeholder='e.g. Coursework toward: Degree Title, School Name, ST or online...' value={values.description} onChange={changeHandler} name='description' id='description' />
                </div>

                {isEditable ?
                    <button className={styles['addBtn']} value='Edit' >Edit</button>
                    : <button className={styles['addBtn']} value='Add' >Add</button>
                }

                {education.length > 0 && (
                    <div className={styles['items']}> {(
                        education.map(x => (
                            <div key={x._id}>
                                <InfoItem text={x.degree + ': ' + x.fieldOfStudy} id={x._id} onDeleteHandler={onDeleteEducation} onEditHandler={onEditEducationBtnClick} />
                            </div>
                        )))}
                    </div>
                )}
            </div>
        </form>
    );
};