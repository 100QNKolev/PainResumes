import styles from './InputDiv.module.css';

export const InputDiv = ({ label, placeholder, value, onChange, name, id}) => {

    return (
        <div className={styles['inputDiv']}>
            <label>{label}</label>
            <input type='text' placeholder={placeholder} value={value} onChange={onChange} name={name} id={id} className={styles['currentInput']} />
        </div>
    );
};