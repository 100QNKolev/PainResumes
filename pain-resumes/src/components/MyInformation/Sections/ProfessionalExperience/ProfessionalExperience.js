import { useEffect, useState } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
import { useForm } from '../../../../hooks/useForm';

import { InfoItem } from '../templates/InfoItem/InfoItem';

import styles from './ProfessionalExperience.module.css';

export const ProfessionalExperience = () => {
    const { onCreateProfessionalExperience, onGetProfessionalExperience, onDelProfessionalExperience, onEditProfessionalExperience } = useMyInfoContext();
    const [experiences, setExperiences] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const { values, changeHandler, onSubmit, changeValues, resetValues } = useForm({
        _id: ''
        , positionTitle: ''
        , companyName: ''
        , startDate: ''
        , endDate: ''
        , workSummary: ''
    }, onCreateProfessionalExperience);

    useEffect(() => {
        onGetProfessionalExperience()
            .then(result => {
                if (result) setExperiences(result);
            });
    }, [onGetProfessionalExperience]);

    const setAllExperiences = async () => {
        onGetProfessionalExperience()
            .then(result => {
                if (result) setExperiences(result);
            });
    };

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
        }

        await setAllExperiences();
    };

    const onDeleteExperience = async (id) => {
        await onDelProfessionalExperience(id);

        await setAllExperiences();
    };

    const onEditExperienceBtnClick = async (id) => {
        await setIsEditable(true);

        await changeValues(experiences.find(x => x._id == id));
    };

    return (
        <form onSubmit={onSubmitExperience} method='POST'>
            <h1>Professional Experience</h1>
            <div className={styles['nestedContainer']}>
                <div className={styles['inputDiv']}>
                    <label>Position Title:</label>
                    <input type='text' placeholder='Position Title' value={values.positionTitle} onChange={changeHandler} name='positionTitle' id='positionTitle' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Company Name:</label>
                    <input type='text' placeholder='Company Name' value={values.companyName} onChange={changeHandler} name='companyName' id='companyName' className={styles['currentInput']} />
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
                    <h2>Work Summary:</h2>
                    <textarea placeholder='Work Summary' value={values.workSummary} onChange={changeHandler} name='workSummary' id='workSummary' />
                </div>

                {isEditable ?
                    <button className={styles['addBtn']} value='Edit' >Edit</button>
                    : <button className={styles['addBtn']} value='Add' >Add</button>
                }

                {experiences.length > 0 && (

                    experiences.map(x => (
                        <div key={x._id}>
                            <InfoItem text={x.positionTitle} id={x._id} onDeleteHandler={onDeleteExperience} onEditHandler={onEditExperienceBtnClick} />
                        </div>
                    ))

                )}
            </div>

        </form>
    );
};