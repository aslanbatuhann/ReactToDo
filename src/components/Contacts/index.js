import {useState} from 'react'
import Footer from "./Footer";
import Header from "./Header/index";
import List from "./List/index";

function Contacts() {
const [contacts, setContacts] = useState([]);
const [situation, setSituation] = useState("All");

  return (
    <div id="container">
      <Header setContacts={setContacts} contacts={contacts}/>
      <List contacts={contacts} setContacts={setContacts} situation={situation}/>
      <Footer contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation}/>
    </div>
  )
}

export default Contacts