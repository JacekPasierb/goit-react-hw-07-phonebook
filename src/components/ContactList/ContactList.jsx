import css from "./ContactListStyle.module.css";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/selectors";
import { deleteContact, fetchContacts } from "../../redux/operations";
import { useEffect } from "react";

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ul>
        {isLoading && !error ? (
          <p>Contacts loading...</p>
        ) : filteredContacts.length === 0 && !error ? (
          <p>The Phonebook is empty. Add your first contact. </p>
        ) : (
          filteredContacts.map(({ id, name, number }) => (
            <li className={css.contactItem} key={id}>
              {name}: {number}
              <button type="submit" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
