
import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';


export const ContactForm = ({onSubmit}) => { 
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const nameInputId = () => shortid.generate();
const numberInpitId = () => shortid.generate();


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
onSubmit(name, number);
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