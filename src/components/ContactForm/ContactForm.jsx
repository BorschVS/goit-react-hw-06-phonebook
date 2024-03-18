import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, resetForm } from '../../redux/formSlice';
import { addContact } from '../../redux/contactsSlice';
import { getContacts, getFormData } from '../../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const form = useSelector(getFormData);
  const contacts = useSelector(getContacts);

  function contactExists(currentName) {
    return contacts.find(({ name }) => name === currentName) !== undefined;
  }

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    dispatch(changeField({ ...form, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    contactExists(form.name)
      ? toast.error(`${form.name} is already in contacts`)
      : dispatch(addContact(form));

    !contactExists(form.name) && dispatch(resetForm());
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
          value={form.name || ''}
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
          value={form.number || ''}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.Form__button} type="submit">
        Add contact
      </button>
    </form>
  );
}
