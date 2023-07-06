import css from "./ContactListStyle.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filters = useSelector((state) => state.filters);
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filters.toLowerCase());
  });

  return (
    <>
      <ul>
        {filteredContacts.map((contact) => (
          <li className={css.contactItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="submit"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
