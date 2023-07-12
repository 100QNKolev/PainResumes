import { useEffect } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
import { useForm } from '../../../../hooks/useForm';

import styles from './PersonalDetails.module.css';

export const PersonalDetails = () => {
    const { onPersonalDetailsSubmit, onGetPersonalDetails } = useMyInfoContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        firstName: ''
        , lastName: ''
        , age: ''
        , phone: ''
        , adress: ''
        , email: ''
        , profile: ''
    }, onPersonalDetailsSubmit);

    useEffect(() => {
        onGetPersonalDetails()
            .then(result => {
                if (result) changeValues(result);
            })
        // eslint-disable-next-line
    }, [onPersonalDetailsSubmit]);

    return (
        <form onSubmit={onSubmit} method='POST'>
            <h1>Personal Details</h1>
            <div className={styles['nestedContainer']}>
                <div className={styles['inputDiv']}>
                    <label>First Name:</label>
                    <input type='text' placeholder='First Name' value={values.firstName} onChange={changeHandler} name='firstName' id='firstName' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Last Name:</label>
                    <input type='text' placeholder='Last Name' value={values.lastName} onChange={changeHandler} name='lastName' id='lastName' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Age:</label>
                    <input type='text' placeholder='Age' value={values.age} onChange={changeHandler} name='age' id='age' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Phone:</label>
                    <input type='text' placeholder='Phone' value={values.phone} onChange={changeHandler} name='phone' id='phone' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Adress:</label>
                    <input type='text' placeholder='Adress' value={values.adress} onChange={changeHandler} name='adress' id='adress' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <label>Email:</label>
                    <input type='text' placeholder='Email' value={values.email} onChange={changeHandler} name='email' id='email' className={styles['currentInput']} />
                </div>
                <div className={styles['inputDiv']}>
                    <h2>Profile:</h2>
                    <textarea placeholder='e.g. Dedicated football coach with 10 years of experience' value={values.profile} onChange={changeHandler} name='profile' id='profile' />
                </div>
                <button className={styles['saveBtn']}>Save</button>
            </div>
        </form>
    );
};