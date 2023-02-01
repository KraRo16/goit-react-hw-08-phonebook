import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  // selectIsLoading,
  selectError,
} from 'redux/contacts/contacts-selectors';

const ContactsPage = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const showContactsList = () => {
    setIsListShown(true);
    // dispatch(fetchContacts());
  };

  // const showForm = () => {
  //   setIsFormShown(true);
  // };

  const closeForm = () => {
    setIsFormShown(false);
  };
  return (
    <>
      <ContactForm />
      <>
        {isListShown ? (
          <>
            <Filter />
            <ContactList />
            {isFormShown && <ContactForm closeForm={closeForm} />}
          </>
        ) : (
          <Button text="Show users" clickHandler={showContactsList} />
        )}
        {error && <p>{error.message}</p>}
      </>
    </>
  );
};

export default ContactsPage;
