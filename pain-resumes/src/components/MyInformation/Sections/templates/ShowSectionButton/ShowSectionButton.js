import styles from './ShowSectionButton.module.css';

export const ShowSectionBtn = ({name, onClick, text}) => {
    
    return (
        <button name={name} className={styles['showSectionBtn']} onClick={onClick}>{text}</button>
    );
};