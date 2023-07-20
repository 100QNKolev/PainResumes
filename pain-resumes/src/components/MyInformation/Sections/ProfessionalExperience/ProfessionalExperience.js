import { useState } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
import { useForm } from '../../../../hooks/useForm';

import { InfoItem } from '../templates/InfoItem/InfoItem';
import { InputDiv } from '../templates/InputDiv/InputDiv';

import styles from './ProfessionalExperience.module.css';

export const ProfessionalExperience = () => {
    const { professionalExperience, onCreateProfessionalExperience, onDelProfessionalExperience, onEditProfessionalExperience } = useMyInfoContext();
    const [isEditable, setIsEditable] = useState(false);
    const { values, changeHandler, onSubmit, changeValues, resetValues } = useForm({
        _id: ''
        , positionTitle: ''
        , companyName: ''
        , startDate: ''
        , endDate: ''
        , workSummary: ''
    }, onCreateProfessionalExperience);

    const onSubmitExperience = async (e) => {
        e.preventDefault();

        const buttonValue = e.target.querySelector('button').value;

        if (buttonValue === 'Add') {
            await onSubmit(e);
        }
        else {
            await onEditProfessionalExperience(values);

            setIsEditable(false);
            resetValues();
        };
    };

    const onDeleteExperience = async (id) => {
        await onDelProfessionalExperience(id);

        await setIsEditable(false);
    };

    const onEditExperienceBtnClick = async (id) => {
        await setIsEditable(true);

        await changeValues(professionalExperience.find(x => x._id === id));
    };

    return (
        <form onSubmit={onSubmitExperience} method='POST'>
            <h1>Professional Experience</h1>
            <div className={styles['nestedContainer']}>

                <InputDiv label='Position Title:' placeholder='Position Title' value={values.positionTitle} onChange={changeHandler} name='positionTitle' id='positionTitle' />

                <InputDiv label='Company Name:' placeholder='Company Name' value={values.companyName} onChange={changeHandler} name='companyName' id='companyName' />

                <InputDiv label='Start Date:' placeholder='Start Date' value={values.startDate} onChange={changeHandler} name='startDate' id='startDate' />

                <InputDiv label='End Date:' placeholder='End Date' value={values.endDate} onChange={changeHandler} name='endDate' id='endDate' />

                <div className={styles['inputDiv']}>
                    <h2>Work Summary:</h2>
                    <textarea placeholder='Work Summary' value={values.workSummary} onChange={changeHandler} name='workSummary' id='workSummary' />
                </div>

                {
                    isEditable ?
                        <button className={styles['addBtn']} value='Edit' >Edit</button>
                        : <button className={styles['addBtn']} value='Add' >Add</button>
                }

                {professionalExperience.length > 0 && (
                    <div className={styles['items']}> {(
                        professionalExperience.map(x => (
                            <div key={x._id}>
                                <InfoItem text={x.positionTitle} id={x._id} onDeleteHandler={onDeleteExperience} onEditHandler={onEditExperienceBtnClick} />
                            </div>
                        )))}
                    </div>
                )}
            </div>
        </form>
    );
};