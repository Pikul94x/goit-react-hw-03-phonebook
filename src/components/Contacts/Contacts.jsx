import styles from './Contacts.module.css'


const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={styles.item} key={id}>
              {name}: {number}
              <button className={styles.button}
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
