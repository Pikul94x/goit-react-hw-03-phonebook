import { Component } from 'react';
import styles from './Phonebook.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Phonebook extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <label className={styles.label} htmlFor="">
              Name
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label className={styles.label} htmlFor="">
              Number
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <br />
            <button className={styles.button}>Add contact</button>
          </form>
        </div>
      </>
    );
  }
}

export default Phonebook;
