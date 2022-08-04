import React from "react";
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';


export class ContactForm extends React.Component { 
static propTypes = { onSubmit: PropTypes.func.isRequired };
state = {
name: '',
number: '',
   }  

nameInputId = shortid.generate();
numberInpitId = shortid.generate();


handleChange = e => {
   const {name, value,} = e.currentTarget;
   this.setState({[name]: value});
}

handleSubmit = e => {
const {name, number} = this.state;
e.preventDefault();
this.props.onSubmit(name, number);

this.setState({
   name: '',
   number: ''
 })
}

render() {
  return (
    <>
    <form className={s.form}      
    onSubmit={this.handleSubmit}>
    <label 
      className={s.lable}
      htmlFor={this.nameInputId}>Name
        <input
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?        [a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and         spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handleChange}
        value={this.state.name}
        id={this.nameInputId}
        />
      </label> 
      <label
         className={s.lable}
         htmlFor={this.numberInputId}>Number 
         <input
         className={s.input}
         type="tel"
         name="number"
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
         title="Phone number must be digits and can contain spaces,        dashes, parentheses and can start with +"
         required
         onChange={this.handleChange}
         value={this.state.number}
         id={this.numberInputId}       />
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
}


// ContactForm.propTypes = {
//    onSubmit: PropTypes.func,
//    };