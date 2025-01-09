

const createAgenda = async () => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/angel', {method: 'post'});
    const data = await response.json();
    console.log(data);
}

const getContactList = async () => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/angel/contacts', {method: 'GET'});
    console.log(response);
    if(!response.ok){
        createAgenda();
    }
    const data = await response.json();
    console.log(data);
    return data.contacts || [];      
}

const createContact = async (name, email, phone, address) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/angel/contacts', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
            name,
            email,
            phone,
            address
        })
    });
    console.log(response);
    const data = await response.json();
    console.log(data); 
    return data;   
}

const deletingContact = async (id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/angel/contacts/${id}`, {method: 'DELETE'});
    console.log(response);
    
}

const updateContact = async (id, newName, newPhone, newEmail, newAddress) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/angel/contacts/${id}`, {
       method: 'PUT',
       headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
            "name": newName,
            "phone": newPhone,
            "email": newEmail,
            "address": newAddress
        })
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data
}

export const api = {
    createAgenda,
    getContactList,
    createContact,
    deletingContact,
    updateContact 
}