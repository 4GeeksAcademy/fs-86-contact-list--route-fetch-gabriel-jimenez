import React, { useState } from "react";
import { api } from "../store/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/modalUpdate.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";



const UpdateContact = ({ id, contact, updateContactList }) => {

	const [newName, setNewName] = useState(contact.name || '');
	const [newEmail, setNewEmail] = useState(contact.email || '');
	const [newPhone, setNewPhone] = useState(contact.phone || '');
	const [newAddress, setNewAddress] = useState(contact.address || '');


	const updateContact = async (id) => {
		const contactUpdate = await api.updateContact(id, newName, newPhone, newEmail, newAddress);
		updateContactList(contactUpdate);
		console.log('Contacto actualizado con éxito:', contactUpdate);


		document.querySelector(`#updateModal-${id} .btn-close`).click();

	};

	return <>
		<div className="modal" id={`updateModal-${id}`} tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title" id="updateModalLabel">Update contact</h1>
						<button className="btn-close" data-bs-dismiss="modal" aria-label="Close"><FontAwesomeIcon icon={faXmark} /></button>
					</div>
					<div className="modal-body">
						<form className="modal-form">
							<div className="modal-inputLabel">
								<label>Name</label>
								<input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
							</div>
							<div className="modal-inputLabel">
								<label>E-mail</label>
								<input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
							</div>
							<div className="modal-inputLabel">
								<label>Phone number</label>
								<input type="number" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
							</div>
							<div className="modal-inputLabel">
								<label>Address</label>
								<input type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button className="modal-button" onClick={() => updateContact(id)}>Save changes</button>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default UpdateContact;