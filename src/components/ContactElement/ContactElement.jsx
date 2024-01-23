import { useDispatch } from 'react-redux';
import { deleteContactAction } from '../../redux/contatcs/operations';
import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));

  const onDeleteContact = idEl => {
    dispatch(deleteContactAction(idEl));
  };

  return (
    <li className={css.contact_item}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={css.btn_delete}
      >
        Delete
      </button>
    </li>
  );
};