import React from "react";
import UpdateContact from "./modalUpdate";
import ModalDeleteContact from "./modalDeleteContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPen, faPhone, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import '../../styles/contact.css'

const Contact = ({ updateContactList, contact, deleteContact, contactList, setContactList }) => {

    const { id, name, address, phone, email } = contact;

    return <>
        <div className="contact-content">
            <div className="contact-image">
                <img src="https://img.icons8.com/ios7/600/contacts.png" />
            </div>
            <div className="contact-list">
                <span><FontAwesomeIcon icon={faUser} /> {name}</span>
                <span><FontAwesomeIcon icon={faLocationDot} /> {address}</span>
                <span><FontAwesomeIcon icon={faPhone} /> {phone}</span>
                <span><FontAwesomeIcon icon={faEnvelope} /> {email}</span>
            </div>
            <div className="contact-buttons">
                <div>
                    <button className="contact-button_update" data-bs-toggle="modal" data-bs-target={`#updateModal-${id}`}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <UpdateContact id={contact.id} contact={contact} updateContactList={updateContactList} />
                </div>
                <div>
                    <button className="contact-button_delete" data-bs-toggle="modal" data-bs-target={`#deleteModal-${id}`} >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <ModalDeleteContact
                        id={contact.id}
                        deleteContact={deleteContact}
                        contactList={contactList}
                        setContactList={setContactList}
                    />
                </div>
            </div>
        </div>
    </>

}

export default Contact;