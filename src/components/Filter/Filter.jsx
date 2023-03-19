import styles from './Filter.module.css'

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p className={styles.message}>Find contacts by name</p>
      <input className={styles.input} type="text" value={value} onChange={onChange} />
    </>
  );
};

export default Filter;
