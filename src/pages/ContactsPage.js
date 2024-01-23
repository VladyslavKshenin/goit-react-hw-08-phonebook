import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectLoading } from '../redux/contatcs/selectors';
import { fetchContactsAction } from '../redux/contatcs/operations';

import { useEffect } from 'react';
// import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  return (
    // <>
    //   <h1>Your contacts</h1>

    //   <div>{isLoading && 'Request in progress...'}</div>
    //   <Form />
    //   <ContactsList />
    // </>
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />

      {isLoading ? (
        <Loader />
      ) : contacts.length > 0 ? (
        <ContactsList />
      ) : (
        <p>No contacts added yet! </p>
      )}
    </div>
  );
}