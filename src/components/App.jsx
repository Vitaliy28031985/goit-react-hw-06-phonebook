
import { useState, useEffect } from 'react';
import shortid from 'shortid';
import {ContactList} from 'components/ContactList/ContactList';
import {ContactForm} from 'components/ContactForm/ContactForm';
import {Filter} from 'components/Filter/Filter';


export const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);  
 
  const addContact = (name, number) => {
    if(name === '') {
      alert(`Please enter a contact name.`);
    }
    if(number === '') {
      alert(`Please enter the contact's phone number.`);
    }
    if(contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`)
      return;
    }
    const newContact = {
    id: shortid.generate(),
    name,
    number,
    } 
    setContacts(prevContact => [newContact, ...prevContact]);
  };

const deleteContact = contactId => {
  setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filterChange = e => {
  setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
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
<ContactForm onSubmit={addContact}/>
  <p
  style={{
  fontSize: 30,
  color: '#010101'
  }}
  >Contacts</p>
  <Filter value={filter} onChange={filterChange}/>
  <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact}/>
  </div>
  );
};
