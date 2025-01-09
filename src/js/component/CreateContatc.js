import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../store/api";
import "../../styles/createContact.css"

const CreateContatc = ({ contactList, setContactList }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const navigate = useNavigate();

	const goToContactList = () => {
		navigate('/');
	}

	const addContact = async () => {
		try {
			if (name.trim() === '' ||
				email.trim() === '' ||
				phone.trim() === '' ||
				address.trim() === '') {
				alert('This contact is empty');
				return;
			};
			const newContact = await api.createContact(name, email, phone, address);
			if (!newContact) {
				alert('Failed to create the contact. Please try again.');
				return;
			}
			setContactList([...contactList, newContact]);
			setName("");
			setEmail("");
			setPhone("");
			setAddress("");
		} catch (error) {
			console.error('error', error);
		}
		goToContactList();
	}

	return <>
		<div className="add-contact">
			<div className="add-contact__container">
				<h1 className="add-contact__title"> Add new contact</h1>
				<form className="add-contact__form">
					<div className="add-contact__input-group">
						<label>Name</label>
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
					</div>
					<div className="add-contact__input-group">
						<label>E-mail</label>
						<input type="email" request="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="add-contact__input-group">
						<label>Phone number</label>
						<input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
					</div>
					<div className="add-contact__input-group">
						<label>Address</label>
						<input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
					</div>
				</form>

				<button className="add-contact__button" onClick={addContact}>Add contact</button>

			</div>
		</div>
	</>
}

export default CreateContatc;