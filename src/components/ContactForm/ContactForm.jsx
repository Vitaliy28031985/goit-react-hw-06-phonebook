
import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../redux/actions';
import {getContacts} from '../../redux/selectors';



export const ContactForm = () => { 
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const contacts = useSelector(getContacts);

const nameInputId = () => shortid.generate();
const numberInpitId = () => shortid.generate();

const dispatch = useDispatch();



   const handleChange = e => {
   const {name, value,} = e.currentTarget;
   switch (name) {
      case 'name':
      setName(value);
      break;
      case 'number':
      setNumber(value);
      break;
      default:
      return;  
   }
}

const handleSubmit = e => {
e.preventDefault();

 if (contacts.find(contact => contact.name === name)) {
alert(`A contact with the name: ${name} already exists.`);
   setName('');
   setNumber('');
   return;
 }

 if (contacts.find(contact => contact.number === number)) {
   alert(`Number: ${number} is already in use.`);
      setName('');
      setNumber('');
      return;
    }

dispatch(action.addContact(name, number));
setName('');
setNumber('');
}

  return (
    <>
    <form className={s.form}      
    onSubmit={handleSubmit}>
    <label 
      className={s.lable}>Name
      <input
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?        [a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and         spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameInputId}
        onChange={handleChange}
        value={name}
        />
      </label> 
      <label
         className={s.lable}>Number 
         <input
         className={s.input}
         type="tel"
         name="number"
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
         title="Phone number must be digits and can contain spaces,        dashes, parentheses and can start with +"
         required
         id={numberInpitId} 
         onChange={handleChange}
         value={number}/>
      </label>
          <button
          className={s.button}
          type="submit">
          Add contact
          </button>
      </form>
   
      </>
     )
   }

ContactForm.propTypes = {
   onSubmit: PropTypes.func,
   };