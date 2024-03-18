import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="Container">
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />

      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="subtitle">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
