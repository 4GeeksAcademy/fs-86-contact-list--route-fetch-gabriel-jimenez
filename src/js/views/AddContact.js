import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import CreateContatc from "../component/CreateContatc";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AddContact = ({ contactList, setContactList }) => {

    let { merequetengue } = useParams();
    let query = useQuery();

    return <>
        <Link to="/">
            <button className="btn btn-primary">View list</button>
        </Link>

        <CreateContatc contactList={contactList} setContactList={setContactList} />
    </>
};

export default AddContact;