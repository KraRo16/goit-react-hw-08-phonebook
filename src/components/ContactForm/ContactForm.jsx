import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from 'redux/contacts/contacts-operations';

const NameId = nanoid();
const NumberId = nanoid();

const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const elem = e.target.elements;
    // const contact = { name, number, id: nanoid() };
    dispatch(addContacts({ name: elem.name.value, phone: elem.phone.value }));
    elem.name.value = '';
    elem.phone.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          id={NameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number:
        <input
          id={NumberId}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" onSubmit={onSubmit}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
