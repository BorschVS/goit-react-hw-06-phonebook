import ContactItem from 'components/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilterContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterContacts);

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
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