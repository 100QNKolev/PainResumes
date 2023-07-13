import { useState } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
import { useForm } from '../../../../hooks/useForm';

import { InfoItem } from '../templates/InfoItem/InfoItem';
import { InputDiv } from '../templates/InputDiv/InputDiv';

import styles from './Skills.module.css';

export const Skills = () => {
    const { skills, onCreateSkills, onEditSkills, onDelSkills } = useMyInfoContext();
    const [isEditable, setIsEditable] = useState(false);
    const { values, changeHandler, onSubmit, changeValues, resetValues } = useForm({
        _id: ''
        , skill: ''
    }, onCreateSkills);

    const onSubmitSkill = async (e) => {
        e.preventDefault();

        const buttonValue = e.target.querySelector('button').value;

        if (buttonValue === 'Add') {
            await onSubmit(e);
        }
        else {
            await onEditSkills(values);

            setIsEditable(false);
            resetValues();
        };
    };

    const onDeleteSkill = async (id) => {
        await onDelSkills(id);

        await setIsEditable(false);
    };

    const onEditSkillBtnClick = async (id) => {
        await setIsEditable(true);

        await changeValues(skills.find(x => x._id === id));
    };

    return (
        <form onSubmit={onSubmitSkill} method='POST'>
            <h1>Skills</h1>

            <div className={styles['nestedContainer']}>

                <InputDiv label='Skill:' placeholder='Skill' value={values.skill} onChange={changeHandler} name='skill' id='skill' />

                {isEditable ?
                    <button className={styles['addBtn']} value='Edit' >Edit</button>
                    : <button className={styles['addBtn']} value='Add' >Add</button>
                }

                {skills.length > 0 && (
                    <div className={styles['items']}> {(
                        skills.map(x => (
                            <div key={x._id}>
                                <InfoItem text={x.skill} id={x._id} onDeleteHandler={onDeleteSkill} onEditHandler={onEditSkillBtnClick} />
                            </div>
                        )))}
                    </div>
                )}
            </div>
        </form>
    );
};