import { useState } from "react";
import ContactList from "./components/ConactList/ContactList";
import SingleContact from "./components/SingleContact/SingleContact";

import "./App.css";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        < SingleContact selectedContactId={selectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
