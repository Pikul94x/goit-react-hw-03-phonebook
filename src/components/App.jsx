import { Component } from 'react';
import styles from './App.module.css';

import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      this.setState(({ contacts }) => ({ contacts: parsedContacts }));
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.find(c => c.name === name)) {
      return alert(`Użytkownik  ${name} już istnieje`);
    }
    const newContact = { id: nanoid(), name, number };
    this.setState({ contacts: [newContact, ...this.state.contacts] });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Phonebook</h1>
        <Phonebook onSubmit={this.addContact} />
        <h2 className={styles.header}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterContacts} />
        <Contacts
          contacts={this.getContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
