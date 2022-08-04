import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactListEL = ({id, name, number, onDeleteContact}) => {

return (
<li className={s.list}>
<span className={s.text}>{name}: </span>
<span>{number}</span>
<button className={s.button} 
type="button"
onClick={() => onDeleteContact(id)}>
Delete</button>
      </li>
)
}

ContactListEL.propTypes = {
id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,
onDeleteContact: PropTypes.func.isRequired,

}