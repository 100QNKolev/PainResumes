<<<<<<< Updated upstream
=======
import { useEffect } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
>>>>>>> Stashed changes
import { useForm } from '../../../../hooks/useForm';

import styles from './Skills.module.css';

<<<<<<< Updated upstream
export const Skills = ({onSubmitHandler}) => {
    const { values, changeHandler, onSubmit } = useForm({
        skill: ''
    }, onSubmitHandler);
=======
export const Skills = () => {
    const { onSkillsSubmit, onGetSkills } = useMyInfoContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        skill: ''
    }, onSkillsSubmit);

    useEffect(() => {
        onGetSkills()
            .then(result => {
                if (result) changeValues(result);
            })
        // eslint-disable-next-line
    }, [onSkillsSubmit]);
>>>>>>> Stashed changes

    return (
        <form onSubmit={onSubmit} method='POST'>
            <h1>Skills</h1>
            <div className={styles['nestedContainer']}>
                <div className={styles['inputDiv']}>
                    <label>Skill:</label>
                    <input type='text' placeholder='Skill' value={values.skill} onChange={changeHandler} name='skill' id='skill' className={styles['currentInput']} />
                </div>
<<<<<<< Updated upstream
                <button className={styles['saveBtn']}>Save</button>
                <button className={styles['addBtn']}>Add More Skills</button>
=======
                <button className={styles['addBtn']}>Add</button>
>>>>>>> Stashed changes
            </div>
        </form>
    );
};