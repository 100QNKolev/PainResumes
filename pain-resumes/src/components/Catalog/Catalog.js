import { Link } from 'react-router-dom';

import styles from './Catalog.module.css';

export const Catalog = () => {

    return (
        <div className={styles['resume-container']}>

            <div className={styles['resume-info']} key='1'>
                <img className={styles['image']} src={require('../ResumeTemplates/templates/resumes/BasicResume/myResume-2.jpg')} alt='resume thumbnail' />
                <div className={styles['createButton']}>
                    <Link to={`/templates/1`} className={styles['create-button']}>Create</Link>
                </div>
            </div>

            <div className={styles['resume-info']} key='2'>
                <img className={styles['image']} src={require('../ResumeTemplates/templates/resumes/InovativeResume/InovativeResume.jpg')} alt='resume thumbnail' />
                <div className={styles['createButton']}>
                    <Link to={`/templates/2`} className={styles['create-button']}>Create</Link>
                </div>
            </div>
        </div>


    )
};