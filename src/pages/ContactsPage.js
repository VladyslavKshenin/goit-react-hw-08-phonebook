// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../redux/contatcs/selectors';
import { fetchContactsAction } from '../redux/contatcs/operations';

import { useEffect } from 'react';
import { ContactsList } from 'components/ContactsList/ContactsList';

export default function ContactsPage() {
 const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

   useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  return (
    <>
          <h1>Your contacts</h1>
          <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />

    </>
  );
}