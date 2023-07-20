import { Link } from 'react-router-dom';

import styles from './Catalog.module.css';

export const Catalog = () => {

    return (
        <div>
            <div className={styles['resume']}>
                <div className={styles['resume-info']} key='1'>
                    <img className={styles['image']} src={require('../ResumeTemplates/resumes/BasicResume/myResume-2.jpg')} alt='resume thumbnail' />
                    <div className={styles['createButton']}>
                        <Link to={`/templates/1`} className={styles['create-button']}>Create</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};