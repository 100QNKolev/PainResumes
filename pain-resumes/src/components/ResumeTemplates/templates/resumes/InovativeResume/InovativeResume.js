import React from 'react';
import styles from './InovativeResume.module.css';

export const InovativeResume = ({ personalDetails, professionalExperience, education, skills }) => {
  return (
    <div className={styles['resume']}>
      <header>
        <h1>{`${personalDetails.firstName || 'First name'} ${personalDetails.lastName || 'Last name'}`}</h1>
        <p>{personalDetails.age}</p>
        <p>{personalDetails.address}</p>
        <p>{personalDetails.phone}</p>
        <p>{personalDetails.email}</p>
      </header>

      <section>
        <h2>Profile</h2>
        {personalDetails.profile ? <p> {personalDetails.profile} </p> : <ul> <li>Your profile here</li> </ul>}
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          {education.length > 0 ? (
            education.map((edu) => (
              <li key={edu._id}>
                <h3>{edu.schoolName}</h3>
                <p>
                  {edu.degree}, {edu.fieldOfStudy} | {edu.startDate} - {edu.endDate}
                </p>
                <p>{edu.description}</p>
              </li>
            ))
          ) : (
            <li>Your education here</li>
          )}
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          {professionalExperience.length > 0 ? (
            professionalExperience.map((exp) => (
              <li key={exp._id}>
                <h3>{exp.companyName}</h3>
                <p>
                  {exp.positionTitle} | {exp.startDate} - {exp.endDate}
                </p>
                <p>{exp.workSummary}</p>
              </li>
            ))
          ) : (
            <li>Your experiences here</li>
          )}
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          {skills.length > 0 ? (
            skills.map((skill) => <li key={skill._id}>{skill.skill}</li>)
          ) : (
            <li>Your skills here</li>
          )}
        </ul>
      </section>
    </div>
  );
};