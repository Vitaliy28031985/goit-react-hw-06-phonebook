import React from "react";
import shortid from 'shortid';


import {ContactList} from 'components/ContactList/ContactList';
import {ContactForm} from 'components/ContactForm/ContactForm';
import {Filter} from 'components/Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  addContact = (name, number) => {
    const { contacts } = this.state; 
    const newContact = {
    id: shortid.generate(),
    name,
    number 
    }
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`)
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

deleteContact = contactId => {
this.setState(pevState => ({
contacts: pevState.contacts.filter(contact => contact.id !== contactId)
}));
  };

  filterChange = e => {
  this.setState({filter: e.currentTarget.value})
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

componentDidMount() {
  const contacts = localStorage.getItem('contacts');
  const contactsPars = JSON.parse(contacts);
  if(contactsPars) {
    this.setState({contacts: contactsPars});
  }
}


  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
  
  const visibleContacts = this.getVisibleContacts();
  const filter = this.state.filter;

  return (
   <div style={{
   marginLeft: 50,
   width: 900,
  }}>
  <p style={{
  fontSize: 30,
  color: '#010101'
  }}
  >Phonebook</p>
<ContactForm onSubmit={this.addContact}/>
  <p
  style={{
  fontSize: 30,
  color: '#010101'
  }}
  >Contacts</p>
  <Filter value={filter} onChange={this.filterChange}/>
  <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
  </div>
  );
}
};
