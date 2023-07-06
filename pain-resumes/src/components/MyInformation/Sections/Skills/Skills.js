import { useForm } from '../../../../hooks/useForm';

import styles from './Skills.module.css';

export const Skills = ({onSubmitHandler}) => {
    const { values, changeHandler, onSubmit } = useForm({
        skill: ''
    }, onSubmitHandler);

    return (
        <form onSubmit={onSubmit} method='POST'>
            <h1>Skills</h1>
            <div className={styles['nestedContainer']}>
                <div className={styles['inputDiv']}>
                    <label>Skill:</label>
                    <input type='text' placeholder='Skill' value={values.skill} onChange={changeHandler} name='skill' id='skill' className={styles['currentInput']} />
                </div>
                <button className={styles['saveBtn']}>Save</button>
                <button className={styles['addBtn']}>Add More Skills</button>
            </div>
        </form>
    );
};