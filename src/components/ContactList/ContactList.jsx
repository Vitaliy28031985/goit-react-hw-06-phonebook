import PropTypes from 'prop-types';
import {ContactListEL} from './ContactListEL';

export const ContactList = ({contacts, onDeleteContact}) => {
return (
<ul>
   {contacts.map(contact => 
   <ContactListEL 
   key={contact.id} 
   id={contact.id}
   name={contact.name} 
   number={contact.number} 
   onDeleteContact={onDeleteContact}/>)}
</ul>


   );
};

ContactList.propTypes = {
onDeleteContact: PropTypes.func.isRequired,
contacts: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,
}),
),
 }
 