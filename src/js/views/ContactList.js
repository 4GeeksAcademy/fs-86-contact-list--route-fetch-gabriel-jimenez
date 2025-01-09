import React, {useEffect} from "react";
import { Link} from "react-router-dom";
import Contact from "../component/contact";
import { api } from "../store/api";

const ContactList = ({contactList, setContactList}) => {

  useEffect(() => {
    updateContactList();
  }, [])

  const updateContactList = async () => {
    const updateList = await api.getContactList();
    setContactList(updateList);
  };

  const deleteContact = async (id) => {
    await api.deletingContact(id);
    const contactDelete = contactList.filter((contact) => contact.id !== id);
    setContactList(contactDelete);
  };
  

	return <>
	  <Link to="/addContact">
			<button className="btn btn-primary">Add new contact</button>
		</Link>
		<div className="contactList-content">
        {Array.isArray(contactList) && contactList.length > 0 ? (
          contactList.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact} 
              id={contact.id}
              deleteContact={deleteContact}
              contactList={contactList}
              setContactList={setContactList}
              updateContactList={updateContactList}
            />
          ))
        ) : (
          <p>No contacts available</p>
        )}
		</div>
	</>
 
};

export default ContactList;