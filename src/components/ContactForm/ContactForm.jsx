import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [formData, setFormData] = useState({});

  function contactExists(currentName) {
    return contacts.find(({ name }) => name === currentName) !== undefined;
  }

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name } = e.currentTarget;

    contactExists(formData.name)
      ? toast.error(`${formData.name} is already in contacts`)
      : dispatch(addContact(formData));

    !contactExists(formData.name) && setFormData({ [name]: '' });
  }

  return (
    <form className={css.Form} onSubmit={handleSubmit}>
      <label className={css.Form__label}>
        Name
        <input
          maxLength={20}
          className={css.Form__input}
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          required
        />
      </label>

      <label className={css.Form__label}>
        Number
        <input
          maxLength={20}
          className={css.Form__input}
          type="tel"
          name="number"
          value={formData.number || ''}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" className={css.Form__button}>
        Add contact
      </button>
    </form>
  );
}
