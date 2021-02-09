import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Heading from './Components/Heading/Heading';
import List from './Components/List/List';
import {contacts} from '../src/Assets/Contacts.json'

const Div = styled.div`
  margin: auto;
  max-width: 1200px;

`
let originalContacts = contacts;

function App() {
   
  let [filteredContacts, setFilteredContacts] = useState(contacts)
  // let [searchValue, setSearchValue] = useState("")

  let searchValueChanged = (e) => {
    setFilteredContacts(filteredContacts.filter(contact => contact.name.toLowerCase().includes(e.target.value.toLowerCase())));
    // console.log(filteredContacts);
  }

  let onLetterClicked = (e) => {
    console.log(filteredContacts);
    setFilteredContacts(originalContacts.filter(contact => contact.name.startsWith(e.target.innerText)));
    // console.log(e.target.innerText);
  }

  let removePressed = (e) => {
    let name = e.target.getAttribute("value")
    console.log(name);
    let originalContacts = filteredContacts.filter(contact => contact.name !== name);
    setFilteredContacts(originalContacts);
  }

  return (
    <Div className="App">
      <Header searchValueChanged={searchValueChanged}/>
      <Heading />
      <List contacts={contacts} letterClicked={onLetterClicked} filteredContacts={filteredContacts} removePressed={removePressed} />
      <button onClick={()=>{
        setFilteredContacts(originalContacts);
      }}>View All</button><br/>
      <Footer className="footer"/>
    </Div>
  );
}

export default App;
