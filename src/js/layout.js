import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Link } from "react-router-dom";
import AddContact from "./views/AddContact";
import ContactList from "./views/ContactList";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { api } from "./store/api";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const [contactList, setContactList] = useState([]);
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<h1>hola soy gabrielito </h1>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Routes>
						{/* <Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} /> */}
						<Route path="/" element={<ContactList contactList={contactList} setContactList={setContactList}/>} />
						<Route path="/addContact" element={<AddContact contactList={contactList} setContactList={setContactList} />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
