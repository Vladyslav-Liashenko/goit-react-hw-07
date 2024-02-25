import { selectVisibleContacts } from '../../redux/selectors';
import { Contact } from './Contact/Contact';
import styled from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={styled.ul}>
        {contacts.map(contact => (
          <li key={contact.id} className={styled.contact}>
            <div>
              <Contact
                name={contact.name}
                number={contact.number}
                contactId={contact.id}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
