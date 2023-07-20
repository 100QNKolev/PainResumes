import styles from './BasicResume.module.css';

export const BasicResume = ({personalDetails, professionalExperience, education, skills}) => {

    return (
        <div className={styles['resume']} >
            <header>
                <h1>{personalDetails.firstName || 'First Name'}</h1>
                <h1>{personalDetails.lastName || 'Last Name'}</h1>
            </header>

            <section>
                <h2>Profile</h2>
                <p>
                    {personalDetails.profile || 'Your Profile Here'}
                </p>
            </section>

            <section>
                <h2>Education</h2>
                <ul>
                    {education.length > 0 ? education
                        .map(x => (
                            <li key={x._id}>
                                <h3>{x.schoolName}</h3>
                                <p>{x.degree}, {x.fieldOfStudy} | {x.endDate}</p>
                            </li>
                        )) : 'Your education here'}
                </ul>
            </section>

            <section>
                <h2>Experience</h2>
                <ul>
                    {professionalExperience.length > 0 ? professionalExperience
                        .map(x => (
                            <li>
                                <h3>{x.companyName}</h3>
                                <p>{x.positionTitle} | {x.startDate} - {x.endDate}</p>
                                <p>{x.workSummary}</p>
                            </li>
                        )) : 'Your experiences here'}
                </ul>
            </section>

            <section>
                <h2>Skills</h2>
                <ul>
                    {skills.length > 0 ? skills
                        .map(x => (
                            <li key={x._id}>{x.skill}</li>
                        )) : 'Your skills here'}
                </ul>
            </section>

            <footer>
                <p>Contact Information: {personalDetails.email || 'Your Email'} | {personalDetails.phone || 'Phone Number'}</p>
            </footer>
        </div >
    );
}