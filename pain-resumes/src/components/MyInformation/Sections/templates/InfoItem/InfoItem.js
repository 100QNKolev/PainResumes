import styles from './InfoItem.module.css';

export const InfoItem = ({ text, id, onDeleteHandler, onEditHandler }) => {

    const onDeleteBtnClick = async (e) => {
        e.preventDefault();

        await onDeleteHandler(id);
    };

    const onEdinBtnClick = async (e) => {
        e.preventDefault();

        await onEditHandler(id);
    };

    return (
        <div className={styles['item']}>
            <div className={styles['label']}>
                <label>{text}</label>
            </div>
            <button className={styles['btn']} onClick={onEdinBtnClick}>✏️</button>
            <button className={styles['btn']} onClick={onDeleteBtnClick}>🗑️</button>
        </div>
    );
};