// import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
// import { selectAllTasks } from 'redux/tasks/selectors';
// import css from './TaskList.module.css';

import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contatcs/selectors';
import { ContactElement } from 'components/ContactElement/ContactElement';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <ContactElement id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};