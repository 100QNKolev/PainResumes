import { useEffect } from 'react';

import { useMyInfoContext } from '../../../../contexts/myInfoContext';
import { useForm } from '../../../../hooks/useForm';

import { InputDiv } from '../templates/InputDiv/InputDiv';

import styles from './PersonalDetails.module.css';

export const PersonalDetails = () => {
    const { personalDetails, onPersonalDetailsSubmit } = useMyInfoContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        firstName: ''
        , lastName: ''
        , age: ''
        , phone: ''
        , adress: ''
        , email: ''
        , profile: ''
    }, onPersonalDetailsSubmit);
 
    const setData = async () => {
        if(Object.keys(personalDetails).length > 0) changeValues(personalDetails)
    };

    useEffect(() => {
        setData();
        // eslint-disable-next-line
    }, [onPersonalDetailsSubmit, personalDetails]);

    const onSubmitPersonalDetails = async (e) => {
        await onSubmit(e);

        await setData();
    };

    return (
        <form onSubmit={onSubmitPersonalDetails} method='POST'>
            <h1>Personal Details</h1>
            <div className={styles['nestedContainer']}>

                <InputDiv label='First Name:' placeholder='First Name' value={values.firstName} onChange={changeHandler} name='firstName' id='firstName' />

                <InputDiv label='Last Name:' placeholder='Last Name' value={values.lastName} onChange={changeHandler} name='lastName' id='lastName' />

                <InputDiv label='Age:' placeholder='Age' value={values.age} onChange={changeHandler} name='age' id='age' />

                <InputDiv label='Phone:' placeholder='Phone' value={values.phone} onChange={changeHandler} name='phone' id='phone' />

                <InputDiv label='Email:' placeholder='Email' value={values.email} onChange={changeHandler} name='email' id='email' />

                <div className={styles['inputDiv']}>
                    <h2>Profile:</h2>
                    <textarea placeholder='e.g. Dedicated football coach with 10 years of experience' value={values.profile} onChange={changeHandler} name='profile' id='profile' />
                </div>

                <button className={styles['saveBtn']}>Save</button>
            </div>
        </form>
    );
};