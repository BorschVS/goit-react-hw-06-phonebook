import ContactItem from 'components/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilterQuery } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterQuery);

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    visibleContacts && (
      <ul className={css.ContactList}>
        {visibleContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    )
  );
};

export default ContactList;
