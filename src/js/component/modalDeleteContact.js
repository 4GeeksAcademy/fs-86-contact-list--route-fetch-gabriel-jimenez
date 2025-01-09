import React from "react";
import { api } from "../store/api";
import '../../styles/modalDelete.css'

const ModalDeleteContact = ({id, contactList, setContactList}) => {

    const deleteContact = async (id) => {
            await api.deletingContact(id);
            const contactDelete= contactList.filter((contact) => contact.id !== id);
            setContactList(contactDelete);
            document.querySelector(`#deleteModal-${id} #btn-close`).click();
          };
          
    
    return<>
            <div className="modal" id={`deleteModal-${id}`} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Eliminate contact</h1>
                        </div>
                        <div className="modal-body">
                           <span>Do you want to delete this contact?</span>
                        </div>
                        <div className="modal-footer">
                            <button className="contact-button_delete"  onClick={() => deleteContact(id)}>Yes, I want</button>
                            <button  id="btn-close" data-bs-dismiss="modal" aria-label="Close">I don't </button>
                        </div>
                    </div>
                </div>
            </div>
    </>        
}

export default ModalDeleteContact;