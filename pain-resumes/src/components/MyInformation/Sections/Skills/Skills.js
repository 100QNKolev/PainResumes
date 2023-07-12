import { useEffect, useState } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
import { useForm } from '../../../../hooks/useForm';

import { InfoItem } from '../templates/InfoItem/InfoItem';

import styles from './Skills.module.css';

export const Skills = () => {
    const { onCreateSkills, onGetSkills, onEditSkills, onDelSkills } = useMyInfoContext();
    const [skills, setSkills] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const { values, changeHandler, onSubmit, changeValues, resetValues } = useForm({
        _id: ''
        , skill: ''
    }, onCreateSkills);

    useEffect(() => {
        onGetSkills()
            .then(result => {
                if (result) setSkills(result);
            });
    }, [onGetSkills]);

    const setAllSkills = async () => {
        onGetSkills()
            .then(result => {
                if (result) setSkills(result);
            });
    };

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
        }

        await setAllSkills();
    };

    const onDeleteSkill = async (id) => {
        await onDelSkills(id);

        await setAllSkills();
    };

    const onEditSkillBtnClick = async (id) => {
        await setIsEditable(true);

        await changeValues(skills.find(x => x._id == id));
    };

    return (
        <form onSubmit={onSubmitSkill} method='POST'>
            <h1>Skills</h1>
            <div className={styles['nestedContainer']}>

                <div className={styles['inputDiv']}>
                    <label>Skill:</label>
                    <input type='text' placeholder='Skill' value={values.skill} onChange={changeHandler} name='skill' id='skill' className={styles['currentInput']} />
                </div>

                {isEditable ?
                    <button className={styles['addBtn']} value='Edit' >Edit</button>
                    : <button className={styles['addBtn']} value='Add' >Add</button>
                }

                {skills.length > 0 && (

                    skills.map(x => (
                        <div key={x._id}>
                            <InfoItem text={x.skill} id={x._id} onDeleteHandler={onDeleteSkill} onEditHandler={onEditSkillBtnClick} />
                        </div>
                    ))

                )}
            </div>
        </form>
    );
};