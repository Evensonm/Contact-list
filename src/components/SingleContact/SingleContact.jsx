import React, { useEffect } from "react";

function SingleContact({ selectedContactId }) {
    const (contact, setContact) = useState(null);
  useEffect(() => {
    async function fetchSingleContact() {
      try {
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await res.json();
        console.log(json);
        setContacts(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingleContact();
  }, []);

  return (
  <div>
    <h1>Details for Contact</h1>
    <p>{contact?.name}</p>
    <p>{contact?.phone}</p>
    <p>{contact?.company}</p>
  </div>
  );
}

export default SingleContact;
