import PropTypes from 'prop-types';
import {ContactListEL} from './ContactListEL';
import { useSelector, useDispatch } from 'react-redux';
import action from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
   const contacts = useSelector(getVisibleContacts);
   const dispatch = useDispatch();
 
   const onDeleteContact = id => dispatch(action.deleteContact(id));

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
 