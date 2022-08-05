import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/add', (name, number) => ({
   payload: {
      id:shortid.generate(),
      name,
      number
   },
}
));

const chahgeFilter = createAction('contacts/filter');
const deleteContact = createAction('contacts/delete');

const action = {addContact, chahgeFilter, deleteContact};

export default action;